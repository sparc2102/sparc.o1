import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { supabase } from '../lib/supabase';

type ExtendedUser = User & {
  name?: string;
  membershipTier?: string;
  joinDate?: string;
  profileComplete?: boolean;
};

interface AuthContextType {
  user: ExtendedUser | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: () => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

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
    // Correct the subscription handling
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
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setIsLoading(false);
      return false;
    }

    const extendedUser: ExtendedUser = {
      ...data.user,
      email: data.user.email || '', // Fallback to empty string if undefined
      name: data.user?.user_metadata?.name || '',
      membershipTier: data.user?.user_metadata?.membershipTier || 'genesis',
      joinDate: new Date().toISOString(),
      profileComplete: false
    };

    setUser(extendedUser);
    localStorage.setItem('sparc_user', JSON.stringify(extendedUser));
    setIsLoading(false);
    return true;
  };

  const register = async (): Promise<boolean> => {
    setIsLoading(false);
    return false; // Placeholder implementation
  };

  const logout = async () => {
    await supabase.auth.signOut();
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