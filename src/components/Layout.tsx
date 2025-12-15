import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, PawPrint, Home } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleHome = () => {
    navigate(user?.role === 'owner' ? '/owner/profile' : '/veterinarian/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-green-300 shadow-sm border-b border-gray-200 rounded-t-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 rounded-t-lg">
            <div className="flex items-center gap-3 cursor-pointer" onClick={handleHome}>
              <PawPrint className="w-8 h-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-gray-900">PawCare</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleHome}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Inicio</span>
              </button>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg rounded-tr-lg">
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {user?.fullName}
                </span>
                <span className={`text-xs font-semibold ml-2 px-2 py-1 rounded ${
                  user?.role === 'owner' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                } rounded-full`}>
                  {user?.role === 'owner' ? 'PawUser' : 'Veterinario'}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors rounded-tr-lg"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-gray-200 mt-12 rounded-b-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-700">
            © 2024 PawCare - Sistema de Gestión Veterinaria
          </p>
        </div>
      </footer>
    </div>
  );
};
