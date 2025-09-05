import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

let supabase: SupabaseClient | null = null;

if (!supabase) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Database types - Updated for complete schema
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          membership_tier: 'genesis' | 'professional' | 'fellows';
          university?: string;
          graduation_year?: number;
          major?: string;
          company?: string;
          position?: string;
          join_date: string;
          profile_complete: boolean;
          last_login?: string;
          avatar_url?: string;
          bio?: string;
          location?: string;
          phone?: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          name: string;
          membership_tier?: 'genesis' | 'professional' | 'fellows';
          university?: string;
          graduation_year?: number;
          major?: string;
          company?: string;
          position?: string;
          join_date?: string;
          profile_complete?: boolean;
          last_login?: string;
          avatar_url?: string;
          bio?: string;
          location?: string;
          phone?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          membership_tier?: 'genesis' | 'professional' | 'fellows';
          university?: string;
          graduation_year?: number;
          major?: string;
          company?: string;
          position?: string;
          join_date?: string;
          profile_complete?: boolean;
          last_login?: string;
          avatar_url?: string;
          bio?: string;
          location?: string;
          phone?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description?: string;
          date_time: string;
          event_type: string;
          capacity: number;
          access_tiers: string[];
          speaker_name?: string;
          speaker_bio?: string;
          category: string;
          location?: string;
          registration_fee?: number;
          cpe_credits?: number;
          created_at: string;
          duration?: string;
          tags?: string[];
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          date_time: string;
          event_type: string;
          capacity: number;
          access_tiers: string[];
          speaker_name?: string;
          speaker_bio?: string;
          category: string;
          location?: string;
          registration_fee?: number;
          cpe_credits?: number;
          created_at?: string;
          duration?: string;
          tags?: string[];
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          date_time?: string;
          event_type?: string;
          capacity?: number;
          access_tiers?: string[];
          speaker_name?: string;
          speaker_bio?: string;
          category?: string;
          location?: string;
          registration_fee?: number;
          cpe_credits?: number;
          created_at?: string;
          duration?: string;
          tags?: string[];
        };
      };
      resources: {
        Row: {
          id: string;
          title: string;
          description?: string;
          content_type: string;
          access_level: string;
          category: string;
          tags?: string[];
          file_url?: string;
          download_count: number;
          author_name?: string;
          publication_date?: string;
          created_at: string;
          file_size?: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string;
          content_type: string;
          access_level: string;
          category: string;
          tags?: string[];
          file_url?: string;
          download_count?: number;
          author_name?: string;
          publication_date?: string;
          created_at?: string;
          file_size?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          content_type?: string;
          access_level?: string;
          category?: string;
          tags?: string[];
          file_url?: string;
          download_count?: number;
          author_name?: string;
          publication_date?: string;
          created_at?: string;
          file_size?: string;
        };
      };
      forum_topics: {
        Row: {
          id: string;
          title: string;
          content: string;
          author_id: string;
          category: string;
          replies_count: number;
          views_count: number;
          created_at: string;
          updated_at: string;
          tags?: string[];
        };
        Insert: {
          id?: string;
          title: string;
          content: string;
          author_id: string;
          category: string;
          replies_count?: number;
          views_count?: number;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
        };
        Update: {
          id?: string;
          title?: string;
          content?: string;
          author_id?: string;
          category?: string;
          replies_count?: number;
          views_count?: number;
          created_at?: string;
          updated_at?: string;
          tags?: string[];
        };
      };
      event_registrations: {
        Row: {
          id: string;
          user_id: string;
          event_id: string;
          registration_date: string;
          attendance_status: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          event_id: string;
          registration_date?: string;
          attendance_status?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          event_id?: string;
          registration_date?: string;
          attendance_status?: string;
        };
      };
      forum_replies: {
        Row: {
          id: string;
          topic_id: string;
          author_id: string;
          content: string;
          created_at: string;
          parent_reply_id?: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          author_id: string;
          content: string;
          created_at?: string;
          parent_reply_id?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          author_id?: string;
          content?: string;
          created_at?: string;
          parent_reply_id?: string;
        };
      };
      job_listings: {
        Row: {
          id: string;
          title: string;
          company: string;
          location: string;
          job_type: string;
          salary?: string;
          description: string;
          requirements: string[];
          benefits: string[];
          posted_date: string;
          application_deadline: string;
          access_tiers: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          company: string;
          location: string;
          job_type: string;
          salary?: string;
          description: string;
          requirements: string[];
          benefits: string[];
          posted_date: string;
          application_deadline: string;
          access_tiers: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          company?: string;
          location?: string;
          job_type?: string;
          salary?: string;
          description?: string;
          requirements?: string[];
          benefits?: string[];
          posted_date?: string;
          application_deadline?: string;
          access_tiers?: string[];
          created_at?: string;
        };
      };
    };
  };
}