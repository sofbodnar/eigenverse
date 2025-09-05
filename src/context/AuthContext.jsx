import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('eigenverse_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('eigenverse_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Simple mock login - just set as authenticated
    const userData = { email };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('eigenverse_user', JSON.stringify(userData));
    return { success: true, user: userData };
  };

  const signup = async (email, password) => {
    // Simple mock signup - just set as authenticated
    const userData = { email };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem('eigenverse_user', JSON.stringify(userData));
    return { success: true, user: userData };
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('eigenverse_user');
    return { success: true };
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      loading,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};