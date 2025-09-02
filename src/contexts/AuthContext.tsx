import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User> & { email: string; password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    email: 'student@university.edu',
    password: 'password123',
    name: 'Alex Johnson',
    membershipTier: 'genesis',
    university: 'Stanford University',
    graduationYear: '2025',
    major: 'Pharmaceutical Sciences',
    joinDate: '2024-01-15',
    profileComplete: true,
    bio: 'Passionate pharmaceutical sciences student focused on drug discovery research.',
    location: 'San Francisco, CA',
    phone: '+1 (555) 123-4567'
  },
  {
    id: '2',
    email: 'professional@pharma.com',
    password: 'password123',
    name: 'Dr. Sarah Chen',
    membershipTier: 'professional',
    company: 'PharmaCorp',
    position: 'Senior Research Scientist',
    joinDate: '2023-08-10',
    profileComplete: true,
    bio: 'Experienced researcher in oncology drug development with 8+ years in the industry.',
    location: 'Boston, MA',
    phone: '+1 (555) 987-6543'
  },
  {
    id: '3',
    email: 'fellow@biotech.com',
    password: 'password123',
    name: 'Dr. Michael Roberts',
    membershipTier: 'fellows',
    company: 'BioInnovate Inc.',
    position: 'Chief Scientific Officer',
    joinDate: '2022-03-22',
    profileComplete: true,
    bio: 'Leader in personalized medicine and biomarker discovery with 15+ years of experience.',
    location: 'San Diego, CA',
    phone: '+1 (555) 456-7890'
  }
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sparc_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('sparc_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: Partial<User> & { email: string; password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const existingUser = mockUsers.find(u => u.email === userData.email);
    if (existingUser) {
      setIsLoading(false);
      return false;
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name || '',
      membershipTier: userData.membershipTier || 'genesis',
      university: userData.university,
      graduationYear: userData.graduationYear,
      major: userData.major,
      company: userData.company,
      position: userData.position,
      joinDate: new Date().toISOString().split('T')[0],
      profileComplete: false
    };
    
    mockUsers.push({ ...newUser, password: userData.password });
    setUser(newUser);
    localStorage.setItem('sparc_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sparc_user');
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('sparc_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}