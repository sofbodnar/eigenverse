# Supabase Setup Instructions

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up/sign in with your GitHub account
3. Click "New Project"
4. Choose your organization (or create one)
5. Enter project details:
   - **Name**: `eigenverse`
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to your users
6. Click "Create new project" (takes ~2 minutes)

## Step 2: Get Your Credentials

1. Once project is ready, go to **Settings** → **API**
2. Copy these values:
   - **URL**: `https://your-project.supabase.co`
   - **anon public key**: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...`

## Step 3: Configure Environment Variables

1. Open `/eigenverse/.env.local`
2. Replace the placeholder values:
   ```
   REACT_APP_SUPABASE_URL=https://your-project.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...
   ```

## Step 4: Create Database Tables

Go to your Supabase dashboard → **SQL Editor** → **New query** and run:

```sql
-- Create user activity tracking table
CREATE TABLE user_activity (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to insert their own activity
CREATE POLICY "Users can insert their own activity" 
ON user_activity FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policy to allow users to view their own activity  
CREATE POLICY "Users can view their own activity"
ON user_activity FOR SELECT
USING (auth.uid() = user_id);

-- Create an index for better performance
CREATE INDEX idx_user_activity_user_id ON user_activity(user_id);
CREATE INDEX idx_user_activity_created_at ON user_activity(created_at);
```

## Step 5: What You'll Be Able to Track

### User Registration Data:
- Email addresses
- First names  
- Registration timestamps
- User authentication status

### User Activity:
- Page visits (landing, topics, etc.)
- Button clicks (topic selections, login attempts)
- Session duration
- Topic preferences
- Learning progress

### Dashboard Access:
- **Supabase Dashboard** → **Authentication** → **Users**: See all registered users
- **Supabase Dashboard** → **Table Editor** → **user_activity**: See all user activity
- **Real-time updates**: See activity as it happens

## Step 6: Restart Your Development Server

After adding the environment variables:
```bash
npm start
```

## What This Gives You:

✅ **Real user data** - Actual email addresses and names
✅ **Persistent storage** - Data survives page refreshes  
✅ **User authentication** - Secure login/logout
✅ **Activity tracking** - See what users are doing
✅ **Analytics dashboard** - Visual insights in Supabase
✅ **Scalable** - Handles thousands of users
✅ **Free tier** - 50,000 monthly active users

## Privacy & GDPR Compliance:
- Users own their data
- Easy data deletion via Supabase dashboard
- Built-in security features
- EU-compliant hosting available