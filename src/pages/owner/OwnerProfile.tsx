import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Layout } from '../../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PetCard } from '../../components/PetCard';
import { User, Mail, Calendar, MapPin, Phone, Plus } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { getPetsByOwnerId, getVeterinarianById } from '../../data/mockData';
import type { Owner } from '../../types';

export const OwnerProfile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const owner = user as Owner;
  const pets = getPetsByOwnerId(owner.id);
  const veterinarian = owner.assignedVeterinarianId 
    ? getVeterinarianById(owner.assignedVeterinarianId)
    : null;

  return (
    <Layout>
      <div className="space-y-6 bg-gray-200 rounded-lg">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Mi Perfil</h1>
        </div>

        {/* User Info Card */}
        <Card className="bg-green-100">
          <CardHeader>
            <CardTitle>Información Personal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Nombre de Usuario</p>
                  <p className="font-medium text-gray-900">{owner.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Nombre Completo</p>
                  <p className="font-medium text-gray-900">{owner.fullName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-medium text-gray-900">{owner.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Fecha de Ingreso</p>
                  <p className="font-medium text-gray-900">{formatDate(owner.joinedDate)}</p>
                </div>
              </div>
              {owner.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <p className="font-medium text-gray-900">{owner.phone}</p>
                  </div>
                </div>
              )}
              {owner.address && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Dirección</p>
                    <p className="font-medium text-gray-900">{owner.address}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Pets Section */}
        <Card className="bg-green-100">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Mis Mascotas ({pets.length})</CardTitle>
              <Button
                onClick={() => navigate('/owner/register-pet')}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Registrar Mascota
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {pets.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {pets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No tienes mascotas registradas</p>
                <Button onClick={() => navigate('/owner/register-pet')}>
                  Registrar tu primera mascota
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Veterinarian Info Card */}
        {veterinarian && (
          <Card className="bg-green-100">
            <CardHeader>
              <CardTitle>Veterinario Asignado</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Nombre</p>
                    <p className="font-medium text-gray-900">{veterinarian.fullName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Correo</p>
                    <p className="font-medium text-gray-900">{veterinarian.email}</p>
                  </div>
                </div>
                {veterinarian.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="font-medium text-gray-900">{veterinarian.phone}</p>
                    </div>
                  </div>
                )}
                {veterinarian.address && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Dirección</p>
                      <p className="font-medium text-gray-900">{veterinarian.address}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};
