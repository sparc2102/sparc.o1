import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
import { supabase } from '../lib/supabase';
const supabaseClient = supabase!;

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
      setIsLoading(false);
      return false;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setIsLoading(false);
      return false;
    }

    if (data.user) {
      const { id } = data.user; // Supabase UID

      // Fetch user details from the `users` table
      const { data: userData, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError) {
        console.error('Error fetching user data:', fetchError);
        setIsLoading(false);
        return false;
      }

      const extendedUser: ExtendedUser = {
        ...userData,
        email: data.user.email || '',
      };

      setUser(extendedUser);
      localStorage.setItem('sparc_user', JSON.stringify(extendedUser));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };

  const register = async (userData: RegistrationData): Promise<boolean> => {
    setIsLoading(true);

    try {
      // Sign up the user with Supabase Auth
      const { data, error } = await supabaseClient.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            membershipTier: validateMembershipTier(userData.membershipTier),
          },
        },
      });

      if (error) {
        console.error('Registration error:', error);
        setIsLoading(false);
        return false;
      }

      if (data.user) {
        const { id } = data.user; // Supabase UID

        // Check if the user already exists in the `users` table
        const { data: existingUser, error: fetchError } = await supabaseClient
          .from('users')
          .select('id')
          .eq('id', id)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
          console.error('Error checking existing user:', fetchError);
          setIsLoading(false);
          return false;
        }

        // Insert user details into the `users` table if they don’t exist
        if (!existingUser) {
          const { error: insertError } = await supabaseClient.from('users').insert({
            id,
            email: userData.email,
            name: userData.name,
            membership_tier: userData.membershipTier,
            university: userData.university,
            graduation_year: userData.graduationYear ? Number(userData.graduationYear) : null,
            major: userData.major,
            company: userData.company,
            position: userData.position,
            phone: userData.phone,
            join_date: new Date().toISOString(),
            profile_complete: true,
          });

          if (insertError) {
            console.error('Error inserting user into users table:', insertError);
            alert(JSON.stringify(insertError, null, 2)); // Show full error in alert for debugging
            setIsLoading(false);
            return false;
          }
        }

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

  const updateProfile = async (userData: Partial<User>) => {
    if (user) {
      const { id } = user; // Supabase UID

      const { error } = await supabaseClient
        .from('users')
        .update(userData)
        .eq('id', id);

      if (error) {
        console.error('Error updating user profile:', error);
        return;
      }

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

