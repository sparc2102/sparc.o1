import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { supabase } from '../lib/supabase';

export type MembershipTier = "genesis" | "professional" | "fellows";

type ExtendedUser = User & {
  name?: string;
  membershipTier?: string;
  joinDate?: string;
  profileComplete?: boolean;
};

interface RegistrationData {
  name: string;
  email: string;
  password: string;
  membershipTier: string;
  university?: string;
  graduationYear?: string;
  major?: string;
  company?: string;
  position?: string;
  phone?: string;
}

interface AuthContextType {
  user: ExtendedUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegistrationData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Define a type for membership tiers
const validateMembershipTier = (tier: string): "genesis" | "professional" | "fellows" => {
  if (tier === "genesis" || tier === "professional" || tier === "fellows") {
    return tier;
  }
  throw new Error("Invalid membership tier");
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('sparc_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) return;

    const authListener = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.user) {
        const extendedUser: ExtendedUser = {
          ...session.user,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || '',
          membershipTier: session.user.user_metadata?.membershipTier || 'genesis',
          joinDate: new Date().toISOString(),
          profileComplete: false
        };
        setUser(extendedUser);
        localStorage.setItem('sparc_user', JSON.stringify(extendedUser));
      } else {
        setUser(null);
        localStorage.removeItem('sparc_user');
      }
    });

    return () => {
      authListener.data?.subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);

    if (!supabase) {
      console.error('Supabase client is not initialized.');
      setIsLoading(false);
      return false;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setIsLoading(false);
      return false;
    }

    const extendedUser: ExtendedUser = {
      ...data.user,
      email: data.user.email || '',
      name: data.user?.user_metadata?.name || '',
      membershipTier: (data.user?.user_metadata?.membershipTier as MembershipTier) || 'genesis',
      joinDate: new Date().toISOString(),
      profileComplete: false
    };

    setUser(extendedUser);
    localStorage.setItem('sparc_user', JSON.stringify(extendedUser));
    setIsLoading(false);
    return true;
  };

  const register = async (userData: RegistrationData): Promise<boolean> => {
    setIsLoading(true);

    if (!supabase) {
      console.error('Supabase client is not initialized.');
      setIsLoading(false);
      return false;
    }
    
    try {
      // Sign up the user with Supabase Auth
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            membershipTier: validateMembershipTier(userData.membershipTier),
            university: userData.university,
            graduationYear: userData.graduationYear,
            major: userData.major,
            company: userData.company,
            position: userData.position,
            phone: userData.phone,
          }
        }
      });

      if (error) {
        console.error('Registration error:', error);
        setIsLoading(false);
        return false;
      }

      // If signup successful, create extended user
      if (data.user) {
        const extendedUser: ExtendedUser = {
          ...data.user,
          email: data.user.email || '',
          name: userData.name,
          membershipTier: validateMembershipTier(userData.membershipTier),
          joinDate: new Date().toISOString(),
          profileComplete: true
        };

        setUser(extendedUser);
        localStorage.setItem('sparc_user', JSON.stringify(extendedUser));
        
        // Optionally, you can also store additional profile data in a profiles table
        // await supabase.from('profiles').insert({
        //   id: data.user.id,
        //   name: userData.name,
        //   membership_tier: userData.membershipTier,
        //   university: userData.university,
        //   graduation_year: userData.graduationYear,
        //   major: userData.major,
        //   company: userData.company,
        //   position: userData.position,
        //   phone: userData.phone,
        // });

        setIsLoading(false);
        return true;
      }

      setIsLoading(false);
      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
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
export type { User };

