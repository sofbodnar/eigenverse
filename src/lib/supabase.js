import { createClient } from '@supabase/supabase-js'

// You'll need to replace these with your actual Supabase project credentials
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper functions for common operations
export const supabaseOperations = {
  // Sign up a new user
  async signUp(email, password, firstName) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
          }
        }
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign in an existing user
  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign out the current user
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  },

  // Track user activity
  async trackActivity(userId, activity, metadata = {}) {
    try {
      const { data, error } = await supabase
        .from('user_activity')
        .insert([
          {
            user_id: userId,
            activity_type: activity,
            metadata,
            created_at: new Date().toISOString()
          }
        ])
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Get current user
  getCurrentUser() {
    return supabase.auth.getUser()
  },

  // Listen to auth changes
  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback)
  }
}