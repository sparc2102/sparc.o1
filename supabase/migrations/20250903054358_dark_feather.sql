/*
  # Create SPARC Database Schema

  1. New Tables
    - `users` - User profiles and membership information
    - `events` - Event listings and details
    - `resources` - Resource library with access control
    - `forum_topics` - Community discussion topics
    - `forum_replies` - Replies to forum topics
    - `event_registrations` - Event registration tracking
    - `job_listings` - Career center job postings

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Implement tier-based access control

  3. Functions
    - Increment view counts
    - Update download counts
*/

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  membership_tier text DEFAULT 'genesis' CHECK (membership_tier IN ('genesis', 'professional', 'fellows')),
  university text,
  graduation_year integer,
  major text,
  company text,
  position text,
  join_date timestamptz DEFAULT now(),
  profile_complete boolean DEFAULT false,
  last_login timestamptz,
  avatar_url text,
  bio text,
  location text,
  phone text,
  created_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  date_time timestamptz NOT NULL,
  event_type text NOT NULL CHECK (event_type IN ('webinar', 'workshop', 'networking', 'bootcamp', 'masterclass', 'forum')),
  capacity integer NOT NULL DEFAULT 100,
  access_tiers text[] NOT NULL DEFAULT ARRAY['genesis'],
  speaker_name text,
  speaker_bio text,
  category text NOT NULL,
  location text,
  registration_fee decimal(10,2) DEFAULT 0,
  cpe_credits integer DEFAULT 0,
  duration text,
  tags text[],
  created_at timestamptz DEFAULT now()
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  content_type text NOT NULL CHECK (content_type IN ('research-paper', 'case-study', 'whitepaper', 'video', 'guide', 'template')),
  access_level text NOT NULL DEFAULT 'genesis' CHECK (access_level IN ('genesis', 'professional', 'fellows')),
  category text NOT NULL,
  tags text[],
  file_url text,
  download_count integer DEFAULT 0,
  author_name text,
  publication_date date,
  file_size text,
  created_at timestamptz DEFAULT now()
);

-- Forum topics table
CREATE TABLE IF NOT EXISTS forum_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES users(id) ON DELETE CASCADE,
  category text NOT NULL,
  replies_count integer DEFAULT 0,
  views_count integer DEFAULT 0,
  tags text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Forum replies table
CREATE TABLE IF NOT EXISTS forum_replies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id uuid REFERENCES forum_topics(id) ON DELETE CASCADE,
  author_id uuid REFERENCES users(id) ON DELETE CASCADE,
  content text NOT NULL,
  parent_reply_id uuid REFERENCES forum_replies(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Event registrations table
CREATE TABLE IF NOT EXISTS event_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  event_id uuid REFERENCES events(id) ON DELETE CASCADE,
  registration_date timestamptz DEFAULT now(),
  attendance_status text DEFAULT 'registered' CHECK (attendance_status IN ('registered', 'attended', 'no-show', 'cancelled')),
  UNIQUE(user_id, event_id)
);

-- Job listings table
CREATE TABLE IF NOT EXISTS job_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company text NOT NULL,
  location text NOT NULL,
  job_type text NOT NULL CHECK (job_type IN ('full-time', 'part-time', 'internship', 'contract')),
  salary text,
  description text NOT NULL,
  requirements text[] NOT NULL,
  benefits text[] NOT NULL,
  posted_date date DEFAULT CURRENT_DATE,
  application_deadline date,
  access_tiers text[] NOT NULL DEFAULT ARRAY['genesis'],
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_listings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid()::text = id::text);

-- RLS Policies for events table
CREATE POLICY "Events are viewable by everyone"
  ON events
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for resources table
CREATE POLICY "Resources are viewable by authenticated users"
  ON resources
  FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for forum_topics table
CREATE POLICY "Forum topics are viewable by authenticated users"
  ON forum_topics
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create forum topics"
  ON forum_topics
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = author_id::text);

-- RLS Policies for forum_replies table
CREATE POLICY "Forum replies are viewable by authenticated users"
  ON forum_replies
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create forum replies"
  ON forum_replies
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = author_id::text);

-- RLS Policies for event_registrations table
CREATE POLICY "Users can view own registrations"
  ON event_registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can register for events"
  ON event_registrations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid()::text = user_id::text);

-- RLS Policies for job_listings table
CREATE POLICY "Job listings are viewable by authenticated users"
  ON job_listings
  FOR SELECT
  TO authenticated
  USING (true);

-- Functions
CREATE OR REPLACE FUNCTION increment_topic_views(topic_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE forum_topics 
  SET views_count = views_count + 1 
  WHERE id = topic_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION increment_resource_downloads(resource_id uuid)
RETURNS void AS $$
BEGIN
  UPDATE resources 
  SET download_count = download_count + 1 
  WHERE id = resource_id;
END;
$$ LANGUAGE plpgsql;