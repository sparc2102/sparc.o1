import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
// Razorpay script loader
function loadRazorpayScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth, MembershipTier } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { membershipTiers } from '../../data/mockData';
import { GraduationCap, CheckCircle, Eye, EyeOff } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  membershipTier: string;
  university: string;
  graduationYear: string;
  major: string;
  company: string;
  position: string;
  phone: string;
  agreedToTerms: boolean;
}

export function RegisterPage() {
  const [showFellowsPopup, setShowFellowsPopup] = useState(false);
  const [step1Touched, setStep1Touched] = useState<{ name: boolean; email: boolean; password: boolean; confirmPassword: boolean }>({ name: false, email: false, password: false, confirmPassword: false });
  const [step1PasswordError, setStep1PasswordError] = useState('');
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const location = useLocation();
  const selectedTier = location.state?.selectedTier || 'genesis';
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    membershipTier: selectedTier,
    university: '',
    graduationYear: '',
    major: '',
    company: '',
    position: '',
    phone: '',
    agreedToTerms: false
  });
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = 'checked' in e.target ? e.target.checked : false;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.agreedToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }

    if (formData.membershipTier === 'fellows') {
      setShowFellowsPopup(true);
      return;
    }

    // Check if email is already in use
    try {
      const { data: existingUser, error: fetchError } = await supabase
        .from('users')
        .select('id')
        .eq('email', formData.email)
        .single();
      // If fetchError is null, and data exists, email is taken
      if (existingUser) {
        setError('The email address is already associated with an existing account. Please use a different email or sign in.');
        return;
      }
      // If fetchError is not null and not a "no rows found" error, show generic error
      if (fetchError && fetchError.code !== 'PGRST116') {
        setError('Error checking email. Please try again.');
        return;
      }
    } catch (err) {
      setError('Error checking email. Please try again.');
      return;
    }

    // Genesis: eligibility check
    if (formData.membershipTier === 'genesis') {
      const currentYear = new Date().getFullYear();
      const gradYear = parseInt(formData.graduationYear, 10);
      if (!formData.graduationYear || isNaN(gradYear)) {
        setError('Please enter a valid graduation year.');
        return;
      }
      if (gradYear > currentYear) {
        // Current student, eligible
      } else if (currentYear - gradYear > 2) {
        setError('Only current students and graduates within 2 years of their graduation date are eligible to join SPARC Genesis.');
        return;
      }
      // Eligible, proceed
      const registrationData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        membershipTier: formData.membershipTier,
        university: formData.university || undefined,
        graduationYear: formData.graduationYear || undefined,
        major: formData.major || undefined,
        company: formData.company || undefined,
        position: formData.position || undefined,
        phone: formData.phone || undefined,
      };
      try {
        const success = await register(registrationData);
        if (success) {
          setShowConfirmationPopup(true);
        } else {
          setError('Registration failed. Email may already be in use or there was a database error.');
        }
      } catch (error) {
        console.error('Registration error:', error);
        setError('Registration failed. Please try again.');
      }
      return;
    }

    // Professional: payment required
    if (formData.membershipTier === 'professional') {
      // Load Razorpay script if not loaded
      const scriptLoaded = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!scriptLoaded) {
        setError('Unable to load payment gateway. Please try again later.');
        return;
      }
      // Payment options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: 19900, // 199 USD in paise (or INR, adjust as needed)
        currency: 'USD',
        name: 'SPARC Membership',
        description: 'Professional Membership Early Subscription',
        image: '/public/logo.png',
        handler: async function (response: any) {
          // On payment success, complete registration
          const registrationData = {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            membershipTier: formData.membershipTier,
            university: formData.university || undefined,
            graduationYear: formData.graduationYear || undefined,
            major: formData.major || undefined,
            company: formData.company || undefined,
            position: formData.position || undefined,
            phone: formData.phone || undefined,
            razorpay_payment_id: response.razorpay_payment_id,
          };
          try {
            const success = await register(registrationData);
            if (success) {
              setShowConfirmationPopup(true);
            } else {
              setError('Registration failed. Email may already be in use or there was a database error.');
            }
          } catch (error) {
            console.error('Registration error:', error);
            setError('Registration failed. Please try again.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
        },
        theme: {
          color: '#2563eb',
        },
      };
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();
      return;
    }
  };

  const selectedMembership = membershipTiers.find(tier => tier.id === formData.membershipTier);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {showFellowsPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Exclusive Fellowship Access</h3>
            <p className="mb-6 text-gray-700">
              Please contact the SPARC team for exclusive fellowship access.<br />
              Registration for Fellows is by invitation only.
            </p>
            <Button className="w-full" onClick={() => setShowFellowsPopup(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
      {showConfirmationPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Confirmation Email Sent</h3>
            <p className="mb-6 text-gray-700">
              A confirmation email has been sent to your email address.<br />
              Please confirm your email and then log in to the app.
            </p>
            <Button className="w-full" onClick={() => { setShowConfirmationPopup(false); navigate('/login'); }}>
              Go to Login
            </Button>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Join SPARC</h2>
          <p className="mt-2 text-gray-600">
            Start your journey in pharmaceutical advancement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Account</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                    1
                  </div>
                  <div className={`flex-1 h-1 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                    2
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Only show error if it's not a required fields message */}
                  {error && !error.startsWith('Please fill all required fields:') && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      {error}
                    </div>
                  )}

                  {step === 1 ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={e => { handleInputChange(e); setStep1Touched(t => ({ ...t, name: true })); }}
                            className={`mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white ${step1Touched.name && !formData.name ? 'border-red-500' : 'border-gray-200'}`}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => { handleInputChange(e); setStep1Touched(t => ({ ...t, email: true })); }}
                            className={`mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 bg-white ${step1Touched.email && !formData.email ? 'border-red-500' : 'border-gray-200'}`}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password *
                          </label>
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            value={formData.password}
                            onChange={e => { handleInputChange(e); setStep1Touched(t => ({ ...t, password: true })); }}
                            className={`mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150 bg-white ${step1Touched.password && !formData.password ? 'border-red-500' : 'border-gray-200'}`}
                          />
                          <button
                            type="button"
                            className="absolute top-8 right-3 text-gray-500 focus:outline-none"
                            onClick={() => setShowPassword((prev) => !prev)}
                            tabIndex={-1}
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        <div className="relative">
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password *
                          </label>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            value={formData.confirmPassword}
                            onChange={e => { handleInputChange(e); setStep1Touched(t => ({ ...t, confirmPassword: true })); }}
                            className={`mt-1 block w-full px-4 py-2 rounded-lg shadow-sm border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition duration-150 bg-white ${step1Touched.confirmPassword && !formData.confirmPassword ? 'border-red-500' : 'border-gray-200'}`}
                          />
                          <button
                            type="button"
                            className="absolute top-8 right-3 text-gray-500 focus:outline-none"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            tabIndex={-1}
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="membershipTier" className="block text-sm font-medium text-gray-700">
                          Membership Tier
                        </label>
                        <select
                          id="membershipTier"
                          name="membershipTier"
                          value={formData.membershipTier}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        >
                          {membershipTiers.map(tier => (
                            <option key={tier.id} value={tier.id}>
                              {tier.name} - {tier.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      {step1PasswordError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-md mb-2">
                          {step1PasswordError}
                        </div>
                      )}
                      <Button 
                        type="button" 
                        onClick={() => {
                          setStep1Touched({ name: true, email: true, password: true, confirmPassword: true });
                          if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
                            // Do not proceed, just highlight fields
                            setStep1PasswordError('');
                            return;
                          }
                          if (formData.password !== formData.confirmPassword) {
                            setStep1PasswordError('Passwords do not match');
                            return;
                          }
                          setStep1PasswordError('');
                          setStep(2);
                        }} 
                        className="w-full"
                      >
                        Continue
                      </Button>
                    </>
                  ) : (
                    <>
                      {formData.membershipTier === 'genesis' ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="university" className="block text-sm font-medium text-gray-700">
                              University
                            </label>
                            <input
                              id="university"
                              name="university"
                              type="text"
                              value={formData.university}
                              onChange={handleInputChange}
                              className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!formData.university && error.includes('University') ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                            />
                          </div>
                          <div>
                            <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
                              Expected Graduation Year
                            </label>
                            <select
                              id="graduationYear"
                              name="graduationYear"
                              value={formData.graduationYear}
                              onChange={handleInputChange}
                              className={`mt-1 block w-full px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${!formData.graduationYear && error.includes('Graduation Year') ? 'border-2 border-red-500' : 'border-2 border-gray-300'}`}
                            >
                              <option value="">Select Year</option>
                              {(() => {
                                const currentYear = new Date().getFullYear();
                                const years = [];
                                for (let y = currentYear + 6; y >= currentYear - 10; y--) {
                                  years.push(y);
                                }
                                return years.map(year => (
                                  <option key={year} value={year}>{year}</option>
                                ));
                              })()}
                            </select>
                          </div>
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                              Company
                            </label>
                            <input
                              id="company"
                              name="company"
                              type="text"
                              value={formData.company}
                              onChange={handleInputChange}
                              className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!formData.company && error.includes('Company') ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                            />
                          </div>
                          <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                              Position
                            </label>
                            <input
                              id="position"
                              name="position"
                              type="text"
                              value={formData.position}
                              onChange={handleInputChange}
                              className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!formData.position && error.includes('Position') ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        <label htmlFor="major" className="block text-sm font-medium text-gray-700">
                          Field of Study/Specialization
                        </label>
                        <input
                          id="major"
                          name="major"
                          type="text"
                          value={formData.major}
                          onChange={handleInputChange}
                          placeholder="e.g., Pharmaceutical Sciences, Medicinal Chemistry"
                          className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!formData.major && error.includes('Field of Study/Specialization') ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div className="flex items-center">
                        <input
                          id="agreedToTerms"
                          name="agreedToTerms"
                          type="checkbox"
                          checked={formData.agreedToTerms}
                          onChange={handleInputChange}
                          className={`h-4 w-4 text-blue-600 focus:ring-blue-500 rounded ${!formData.agreedToTerms && error.includes('Agreement to Terms') ? 'border-2 border-red-500' : 'border border-gray-300'}`}
                        />
                        <label htmlFor="agreedToTerms" className="ml-2 block text-sm text-gray-900">
                          I agree to the{' '}
                          <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <div className="flex space-x-4">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setStep(1)} 
                          className="w-full"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit" 
                          className="w-full"
                          disabled={isLoading}
                          onClick={e => {
                            // Only validate on step 2
                            if (step === 2) {
                              let missing = [];
                              if (formData.membershipTier === 'genesis') {
                                if (!formData.university) missing.push('University');
                                if (!formData.graduationYear) missing.push('Graduation Year');
                              } else {
                                if (!formData.company) missing.push('Company');
                                if (!formData.position) missing.push('Position');
                              }
                              if (!formData.major) missing.push('Field of Study/Specialization');
                              if (!formData.agreedToTerms) missing.push('Agreement to Terms');
                              if (missing.length > 0) {
                                e.preventDefault();
                                setError('Please fill all required fields: ' + missing.join(', '));
                                return;
                              }
                            }
                          }}
                        >
                          {isLoading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                      </div>
                    </>
                  )}
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                      Sign in here
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Membership Overview */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Selected Membership</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMembership && (
                  <div>
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold" style={{ color: selectedMembership.color }}>
                        {selectedMembership.name}
                      </h3>
                      <div className="text-2xl font-bold text-gray-900 mt-2">
                        {selectedMembership.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {selectedMembership.duration}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Benefits Include:</h4>
                      {selectedMembership.benefits.slice(0, 4).map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                      {selectedMembership.benefits.length > 4 && (
                        <div className="text-sm text-gray-500">
                          + {selectedMembership.benefits.length - 4} more benefits
                        </div>
                      )}
                    </div>

                    <div className="mt-6 p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-700">
                        <strong>Eligibility:</strong> {selectedMembership.eligibility}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}