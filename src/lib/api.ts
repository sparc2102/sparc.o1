import { supabase } from './supabaseClient';

// Fetch all events
export const fetchEvents = async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*');

  if (error) {
    console.error('Error fetching events:', error);
    throw error;
  }

  return data;
};

// Fetch a single event by ID
export const fetchEventById = async (id: string) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching event:', error);
    throw error;
  }

  return data;
};

// Fetch all users
export const fetchUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*');

  if (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

  return data;
};

// Fetch user by ID
export const fetchUserById = async (id: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    throw error;
  }

  return data;
};

// Fetch forum topics
export const fetchForumTopics = async () => {
  const { data, error } = await supabase
    .from('forum_topics')
    .select('*');

  if (error) {
    console.error('Error fetching forum topics:', error);
    throw error;
  }

  return data;
};
