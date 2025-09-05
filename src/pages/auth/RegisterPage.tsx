import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { membershipTiers } from '../../data/mockData';
import { GraduationCap, CheckCircle } from 'lucide-react';
import { MembershipTier } from '../../types';

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
      [name]: type === 'checkbox' ? checked : (name === 'membershipTier' ? value as unknown as MembershipTier : value)
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

    // Create registration data object with proper typing
    const registrationData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      membershipTier: formData.membershipTier,
      ...(formData.university && { university: formData.university }),
      ...(formData.graduationYear && { graduationYear: formData.graduationYear }),
      ...(formData.major && { major: formData.major }),
      ...(formData.company && { company: formData.company }),
      ...(formData.position && { position: formData.position }),
      ...(formData.phone && { phone: formData.phone }),
    };

    try {
      const success = await register(registrationData as any);
      if (success) {
        navigate('/dashboard');
      } else {
        setError('Registration failed. Email may already be in use.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  const selectedMembership = membershipTiers.find(tier => tier.id === formData.membershipTier);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
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
                  {error && (
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
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password *
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={formData.password}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password *
                          </label>
                          <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          />
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

                      <Button 
                        type="button" 
                        onClick={() => setStep(2)} 
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
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
                              Expected Graduation Year
                            </label>
                            <input
                              id="graduationYear"
                              name="graduationYear"
                              type="text"
                              value={formData.graduationYear}
                              onChange={handleInputChange}
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
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
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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