import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Layout } from '../../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { PetCard } from '../../components/PetCard';
import { User, Mail, Calendar, MapPin, Phone } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import { getPetsByVeterinarianId, getOwnerById } from '../../data/mockData';
import type { Veterinarian } from '../../types';

export const VeterinarianDashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const veterinarian = user as Veterinarian;
  const pets = getPetsByVeterinarianId(veterinarian.id);

  const handlePetClick = (petId: string) => {
    navigate(`/veterinarian/appointment/${petId}`);
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Panel de Veterinario</h1>
        </div>

        {/* Veterinarian Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Mi Información</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Nombre de Usuario</p>
                  <p className="font-medium text-gray-900">{veterinarian.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Nombre Completo</p>
                  <p className="font-medium text-gray-900">{veterinarian.fullName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-medium text-gray-900">{veterinarian.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Fecha de Ingreso</p>
                  <p className="font-medium text-gray-900">{formatDate(veterinarian.joinedDate)}</p>
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
              {veterinarian.specialization && (
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Especialización</p>
                    <p className="font-medium text-gray-900">{veterinarian.specialization}</p>
                  </div>
                </div>
              )}
              {veterinarian.licenseNumber && (
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Licencia</p>
                    <p className="font-medium text-gray-900">{veterinarian.licenseNumber}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Patients Section */}
        <Card>
          <CardHeader>
            <CardTitle>Mascotas a mi Cargo ({pets.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {pets.length > 0 ? (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">
                  Haz clic en una mascota para registrar una cita médica
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {pets.map((pet) => {
                    const owner = getOwnerById(pet.ownerId);
                    return (
                      <PetCard
                        key={pet.id}
                        pet={pet}
                        ownerName={owner?.fullName}
                        onClick={() => handlePetClick(pet.id)}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No tienes mascotas asignadas actualmente</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
