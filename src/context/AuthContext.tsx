import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, LoginCredentials, AuthState } from '../types';
import { mockUsers } from '../data/mockData';

const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (credentials: LoginCredentials): Promise<void> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const foundUser = mockUsers.find(
      u => u.email === credentials.email && u.role === credentials.role
    );

    if (!foundUser) {
      throw new Error('Usuario no encontrado o credenciales incorrectas');
    }

    setUser(foundUser);
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
