import React, { useState } from 'react';
import { useAuth, User } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  User as UserIcon, 
  Mail, 
  Phone, 
  MapPin, 
  Building,
  GraduationCap,
  Calendar,
  Edit,
  Save,
  X,
  Award,
  Flame,
  Camera,
  Settings,
  Bell,
  Lock,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export function ProfilePage() {
  const { user, updateProfile, isLoading } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    location: user?.location || '',
    university: user?.university || '',
    graduation_year: user?.graduationYear?.toString() || '',
    major: user?.major || '',
    company: user?.company || '',
    position: user?.position || ''
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setError('');
    setSuccess('');
    setIsSaving(true);

    try {
      const updateData: Partial<User> = {
        name: formData.name,
        phone: formData.phone || undefined, // Replace null with undefined
        bio: formData.bio || undefined, // Replace null with undefined
        location: formData.location || undefined, // Replace null with undefined
        university: formData.university || undefined, // Replace null with undefined
        graduationYear: formData.graduation_year || undefined, // Use string or undefined
        major: formData.major || undefined, // Replace null with undefined
        company: formData.company || undefined, // Replace null with undefined
        position: formData.position || undefined, // Replace null with undefined
      };

      const result = await updateProfile(updateData);
      
      // Assume updateProfile returns void, so always show success unless an error is thrown
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('An error occurred while updating your profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    // Reset form data to current user data
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      bio: user.bio || '',
      location: user.location || '',
      university: user.university || '',
      graduation_year: user.graduationYear?.toString() || '',
      major: user.major || '',
      company: user.company || '',
      position: user.position || ''
    });
    setIsEditing(false);
    setError('');
    setSuccess('');
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'genesis': return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' };
      case 'professional': return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
      case 'fellows': return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-200' };
    }
  };

  const tierColors = getTierColor(user.membershipTier);

  const calculateProfileComplete = () => {
    const requiredFields = [user.name, user.email];
    const optionalFields = [user.phone, user.bio, user.location];
    const tierSpecificFields = user.membershipTier === 'genesis' 
      ? [user.university, user.major] 
      : [user.company, user.position];
    
    const allFields = [...requiredFields, ...optionalFields, ...tierSpecificFields];
    const filledFields = allFields.filter(field => field && field.toString().trim() !== '').length;
    
    return Math.round((filledFields / allFields.length) * 100);
  };

  const profileCompleteness = calculateProfileComplete();

  const profileSections = [
    {
      title: 'Personal Information',
      fields: [
        { key: 'name', label: 'Full Name', icon: UserIcon, required: true },
        { key: 'email', label: 'Email Address', icon: Mail, required: true, disabled: true },
        { key: 'phone', label: 'Phone Number', icon: Phone },
        { key: 'location', label: 'Location', icon: MapPin },
        { key: 'bio', label: 'Biography', icon: UserIcon, type: 'textarea' }
      ]
    },
    {
      title: user.membershipTier === 'genesis' ? 'Academic Information' : 'Professional Information',
      fields: user.membershipTier === 'genesis' 
        ? [
            { key: 'university', label: 'University', icon: GraduationCap },
            { key: 'graduation_year', label: 'Graduation Year', icon: Calendar },
            { key: 'major', label: 'Major/Field of Study', icon: GraduationCap }
          ]
        : [
            { key: 'company', label: 'Company', icon: Building },
            { key: 'position', label: 'Position', icon: Award },
            { key: 'major', label: 'Specialization', icon: GraduationCap }
          ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your personal information and membership details</p>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            {success}
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-center">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                    <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    {user?.avatar ? (
                      <img 
                      src={user.avatar} 
                      alt="Profile" 
                      className="h-24 w-24 rounded-full object-cover"
                      />
                    ) : (
                      <UserIcon className="h-12 w-12 text-gray-400" />
                    )}
                    </div>
                  <button className="absolute bottom-0 right-1/2 transform translate-x-8 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full border ${tierColors.bg} ${tierColors.text} ${tierColors.border} mb-4`}>
                  <Flame className="h-4 w-4 mr-2" />
                  {user.membershipTier.charAt(0).toUpperCase() + user.membershipTier.slice(1)} Member
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Member since {new Date(user.joinDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Complete</span>
                    <span className={profileCompleteness === 100 ? 'text-green-600' : 'text-orange-600'}>
                      {profileCompleteness}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${profileCompleteness === 100 ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: `${profileCompleteness}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button variant="outline" className="w-full" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    <Lock className="h-4 w-4 mr-2" />
                    Privacy Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {profileSections.map((section, sectionIndex) => (
                <Card key={sectionIndex}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{section.title}</CardTitle>
                      {!isEditing ? (
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            onClick={handleSave}
                            disabled={isSaving}
                          >
                            <Save className="h-4 w-4 mr-2" />
                            {isSaving ? 'Saving...' : 'Save'}
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={handleCancel}
                            disabled={isSaving}
                          >
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {section.fields.map((field) => {
                        const Icon = field.icon;
                        return (
                          <div key={field.key} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                            <label htmlFor={field.key} className="block text-sm font-medium text-gray-700 mb-2">
                              <Icon className="inline h-4 w-4 mr-2" />
                              {field.label}
                              {field.required && <span className="text-red-500 ml-1">*</span>}
                            </label>
                            {isEditing && !field.disabled ? (
                              field.type === 'textarea' ? (
                                <textarea
                                  id={field.key}
                                  rows={3}
                                  value={formData[field.key as keyof typeof formData]}
                                  onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                              ) : (
                                <input
                                  type={field.key === 'email' ? 'email' : field.key === 'graduation_year' ? 'number' : 'text'}
                                  id={field.key}
                                  value={formData[field.key as keyof typeof formData]}
                                  onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                                  required={field.required}
                                />
                              )
                            ) : (
                              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                                {formData[field.key as keyof typeof formData] || 
                                 (field.disabled ? formData[field.key as keyof typeof formData] : 'Not provided')}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Membership Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Membership Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Award className="inline h-4 w-4 mr-2" />
                        Current Tier
                      </label>
                      <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${tierColors.bg} ${tierColors.text}`}>
                          {user.membershipTier.charAt(0).toUpperCase() + user.membershipTier.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Join Date
                      </label>
                      <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Upgrade Your Membership</h4>
                    <p className="text-blue-700 text-sm mb-3">
                      Unlock more benefits and exclusive opportunities by upgrading your membership tier.
                    </p>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Upgrade Options
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}