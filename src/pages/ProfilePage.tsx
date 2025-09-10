import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
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
  const { user } = useAuth();
  const [profile, setProfile] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      if (user && user.id && supabase) {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();
        if (data) setProfile(data);
        if (error) setError('Failed to load profile.');
      }
    }
    fetchProfile();
  }, [user]);

  const [membershipTier, setMembershipTier] = useState<any>(null);

  useEffect(() => {
    if (profile && profile.membershipTier) {
      const tier = require('../data/mockData').membershipTiers.find((t: any) => t.id === profile.membershipTier);
      setMembershipTier(tier);
    }
  }, [profile]);

  if (!profile) {
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
      const updateData = {
        name: profile.name,
        phone: profile.phone || undefined,
        bio: profile.bio || undefined,
        location: profile.location || undefined,
        university: profile.university || undefined,
        graduation_year: profile.graduation_year ? Number(profile.graduation_year) : null,
        major: profile.major || undefined,
        company: profile.company || undefined,
        position: profile.position || undefined,
      };
      if (supabase && user && user.id) {
        const { error: updateError } = await supabase
          .from('users')
          .update(updateData)
          .eq('id', user.id);
        if (updateError) {
          setError('Failed to update profile.');
        } else {
          setSuccess('Profile updated successfully!');
          setIsEditing(false);
          setTimeout(() => setSuccess(''), 3000);
        }
      }
    } catch (error) {
      setError('An error occurred while updating your profile.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
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
  const tierColors = getTierColor(profile.membership_tier);

  // Helper for safe date formatting
  const formatDate = (dateStr: string | null | undefined) => {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const calculateProfileComplete = () => {
    const requiredFields = [profile.name, profile.email, profile.avatar_url];
    const optionalFields = [profile.phone, profile.bio, profile.location];
    const tierSpecificFields = profile.membership_tier === 'genesis' 
      ? [profile.university, profile.major] 
      : [profile.company, profile.position];
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
      title: profile.membership_tier === 'genesis' ? 'Academic Information' : 'Professional Information',
      fields: profile.membership_tier === 'genesis' 
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
                  <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto overflow-hidden">
                    {profile.avatar_url ? (
                      <img 
                        src={profile.avatar_url} 
                        alt="Profile" 
                        className="h-24 w-24 rounded-full object-cover"
                      />
                    ) : (
                      <UserIcon className="h-12 w-12 text-gray-400" />
                    )}
                  </div>
                  {isEditing && (
                    <label className="absolute bottom-0 right-1/2 transform translate-x-8 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors cursor-pointer">
                      <Camera className="h-4 w-4" />
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (!file || !user) return;
                          // Upload to Supabase Storage
                          const fileName = `${user.id}_${Date.now()}`;
                          if (!supabase) {
                            setError('Supabase client not initialized.');
                            return;
                          }
                          const { error: uploadError } = await supabase.storage.from('avatars').upload(fileName, file, {
                            cacheControl: '3600',
                            upsert: true,
                          });
                          if (uploadError) {
                            setError('Failed to upload avatar.');
                            return;
                          }
                          // Get public URL
                          const { data: urlData } = supabase.storage.from('avatars').getPublicUrl(fileName);
                          if (urlData?.publicUrl) {
                            setProfile((prev: Record<string, any>) => ({ ...prev, avatar_url: urlData.publicUrl }));
                          }
                        }}
                      />
                    </label>
                  )}
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-1">{profile.name}</h2>
                <p className="text-gray-600 mb-4">{profile.email}</p>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full border ${tierColors.bg} ${tierColors.text} ${tierColors.border} mb-4`}>
                  <Flame className="h-4 w-4 mr-2" />
                  {profile.membership_tier.charAt(0).toUpperCase() + profile.membership_tier.slice(1)} Member
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Member since {formatDate(profile.join_date)}
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
                                  value={profile[field.key as keyof typeof profile] ?? ''}
                                  onChange={(e) => setProfile((prev: Record<string, any>) => ({ ...prev, [field.key]: e.target.value }))}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                                />
                              ) : (
                                <input
                                  type={field.key === 'email' ? 'email' : field.key === 'graduation_year' ? 'number' : 'text'}
                                  id={field.key}
                                  value={profile[field.key as keyof typeof profile]}
                                  onChange={(e) => setProfile((prev: Record<string, any>) => ({ ...prev, [field.key]: e.target.value }))}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                                  required={field.required}
                                />
                              )
                            ) : (
                              <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                                {profile[field.key as keyof typeof profile] || 
                                 (field.disabled ? profile[field.key as keyof typeof profile] : 'Not provided')}
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
                          {profile.membership_tier.charAt(0).toUpperCase() + profile.membership_tier.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Join Date
                      </label>
                      <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-900">
                        {formatDate(profile.join_date)}
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