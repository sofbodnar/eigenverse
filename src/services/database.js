import { supabase } from '../context/AuthContext';

// User Profile functions
export const createUserProfile = async (userData) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .insert([{
      id: userData.id,
      email: userData.email,
      full_name: userData.full_name || ''
    }]);
  
  return { data, error };
};

export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  return { data, error };
};

// Progress tracking functions
export const saveTopicProgress = async (topicName, completed = false, timeSpent = 0) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('user_progress')
    .upsert([{
      user_id: user.id,
      topic_name: topicName,
      completed,
      completion_date: completed ? new Date().toISOString() : null,
      time_spent_minutes: timeSpent
    }]);
  
  return { data, error };
};

export const getUserProgress = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user.id);
  
  return { data, error };
};

export const getTopicProgress = async (topicName) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', user.id)
    .eq('topic_name', topicName)
    .single();
  
  return { data, error };
};

// Bookmark functions
export const addBookmark = async (topicName, notes = '') => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('bookmarks')
    .insert([{
      user_id: user.id,
      topic_name: topicName,
      notes
    }]);
  
  return { data, error };
};

export const removeBookmark = async (topicName) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('bookmarks')
    .delete()
    .eq('user_id', user.id)
    .eq('topic_name', topicName);
  
  return { data, error };
};

export const getUserBookmarks = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { error: 'Not authenticated' };

  const { data, error } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });
  
  return { data, error };
};

export const isTopicBookmarked = async (topicName) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return { data: false, error: null };

  const { data, error } = await supabase
    .from('bookmarks')
    .select('id')
    .eq('user_id', user.id)
    .eq('topic_name', topicName)
    .single();
  
  return { data: !!data, error: error?.code === 'PGRST116' ? null : error };
};