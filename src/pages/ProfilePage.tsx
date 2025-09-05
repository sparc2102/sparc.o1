import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  User, 
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
  Lock
} from 'lucide-react';

export function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    location: user?.location || '',
    university: user?.university || '',
    graduationYear: user?.graduationYear || '',
    major: user?.major || '',
    company: user?.company || '',
    position: user?.position || ''
  });

  if (!user) return null;

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || '',
      bio: user.bio || '',
      location: user.location || '',
      university: user.university || '',
      graduationYear: user.graduationYear || '',
      major: user.major || '',
      company: user.company || '',
      position: user.position || ''
    });
    setIsEditing(false);
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

  const profileSections = [
    {
      title: 'Personal Information',
      fields: [
        { key: 'name', label: 'Full Name', icon: User, required: true },
        { key: 'email', label: 'Email Address', icon: Mail, required: true, disabled: true },
        { key: 'phone', label: 'Phone Number', icon: Phone },
        { key: 'location', label: 'Location', icon: MapPin },
        { key: 'bio', label: 'Biography', icon: User, type: 'textarea' }
      ]
    },
    {
      title: user.membershipTier === 'genesis' ? 'Academic Information' : 'Professional Information',
      fields: user.membershipTier === 'genesis' 
        ? [
            { key: 'university', label: 'University', icon: GraduationCap },
            { key: 'graduationYear', label: 'Graduation Year', icon: Calendar },
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <User className="h-12 w-12 text-gray-400" />
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
                    <span className={user.profileComplete ? 'text-green-600' : 'text-orange-600'}>
                      {user.profileComplete ? '100%' : '75%'}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${user.profileComplete ? 'bg-green-500' : 'bg-orange-500'}`}
                      style={{ width: user.profileComplete ? '100%' : '75%' }}
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
                          <Button size="sm" onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button variant="outline" size="sm" onClick={handleCancel}>
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
                                  type={field.key === 'email' ? 'email' : 'text'}
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