import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Stethoscope, PawPrint } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';

export const LoginSelection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <PawPrint className="w-16 h-16 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Bienvenido a PawCare
          </h1>
          <p className="text-lg text-gray-600">
            Sistema de Gestión Veterinaria
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Owner Login */}
          <Card
            onClick={() => navigate('/login/owner')}
            className="cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <CardContent>
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  PawUser
                </h2>
                <p className="text-gray-600 mb-6">
                  Accede para gestionar la información de tus mascotas y ver su historial médico
                </p>
                <div className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
                  Iniciar Sesión
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Veterinarian Login */}
          <Card
            onClick={() => navigate('/login/veterinarian')}
            className="cursor-pointer hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <CardContent>
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Stethoscope className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  Veterinario
                </h2>
                <p className="text-gray-600 mb-6">
                  Accede para gestionar tus pacientes y registrar consultas médicas
                </p>
                <div className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium">
                  Iniciar Sesión
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
