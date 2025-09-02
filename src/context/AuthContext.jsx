import React, { createContext, useState, useContext } from 'react';

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
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    // Simple mock login - just set as authenticated
    setUser({ email });
    setIsAuthenticated(true);
    return { success: true, user: { email } };
  };

  const signup = async (email, password) => {
    // Simple mock signup - just set as authenticated
    setUser({ email });
    setIsAuthenticated(true);
    return { success: true, user: { email } };
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
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