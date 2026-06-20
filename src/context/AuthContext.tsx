import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import AuthModal from '../components/layout/AuthModal';

interface User {
  phone: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  signup: () => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isOpen: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // v1 is a mock shell, real Firebase implementation comes in Phase 5
  const login = () => setIsAuthModalOpen(true);
  const signup = () => setIsAuthModalOpen(true);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      signup,
      logout,
      isAuthModalOpen,
      setIsAuthModalOpen
    }}>
      {children}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
