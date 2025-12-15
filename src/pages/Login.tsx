import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { PawPrint, User, Stethoscope, ArrowLeft } from 'lucide-react';
import type { UserRole } from '../types';

export const Login: React.FC = () => {
  const { role } = useParams<{ role: UserRole }>();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isOwner = role === 'owner';
  const Icon = isOwner ? User : Stethoscope;
  const title = isOwner ? 'PawUser' : 'Veterinario';
  const bgColor = isOwner ? 'from-blue-400 to-blue-600' : 'from-green-400 to-green-600';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ email, password, role: role as UserRole });
      navigate(isOwner ? '/owner/profile' : '/veterinarian/dashboard');
    } catch (err) {
      setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/login')}
          className="mb-4 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <Card>
          <CardHeader>
            <div className="flex flex-col items-center">
              <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${bgColor} flex items-center justify-center`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
              <CardTitle>{title}</CardTitle>
              <div className="flex items-center gap-2 mt-2">
                <PawPrint className="w-5 h-5 text-primary-600" />
                <span className="text-sm text-gray-600">PawCare</span>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                label="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ejemplo@correo.com"
              />

              <Input
                type="password"
                label="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
              />

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 font-medium mb-2">Usuarios de prueba:</p>
              {isOwner ? (
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• juan.perez@email.com</p>
                  <p>• maria.gomez@email.com</p>
                  <p>• carlos.silva@email.com</p>
                </div>
              ) : (
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• maria.martinez@pawcare.com</p>
                  <p>• carlos.rodriguez@pawcare.com</p>
                  <p>• ana.lopez@pawcare.com</p>
                </div>
              )}
              <p className="text-xs text-gray-400 mt-2">Contraseña: cualquiera</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
