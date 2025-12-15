import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Button } from '../../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { BREEDS_BY_TYPE } from '../../types';
import type { PetType } from '../../types';

export const RegisterPet: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    type: '' as PetType | '',
    breed: '',
    birthDate: '',
    primaryColor: '',
    secondaryColor: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally save to backend
    alert('Mascota registrada exitosamente!');
    navigate('/owner/profile');
  };

  const petTypeOptions = [
    { value: 'dog', label: 'Perro' },
    { value: 'cat', label: 'Gato' },
    { value: 'bird', label: 'Loro' },
  ];

  const breedOptions = formData.type
    ? BREEDS_BY_TYPE[formData.type].map(breed => ({ value: breed, label: breed }))
    : [];

  const calculateAge = (birthDate: string): string => {
    if (!birthDate) return '';
    const birth = new Date(birthDate);
    const now = new Date();
    const years = now.getFullYear() - birth.getFullYear();
    const months = now.getMonth() - birth.getMonth();
    
    if (years > 0) {
      return `${years} ${years === 1 ? 'año' : 'años'}`;
    }
    return `${months} ${months === 1 ? 'mes' : 'meses'}`;
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate('/owner/profile')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Perfil
        </button>

        <Card>
          <CardHeader>
            <CardTitle>Registrar Nueva Mascota</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Nombre de la Mascota"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Ej: Max, Luna, Rocky"
              />

              <Select
                label="Tipo de Mascota"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as PetType, breed: '' })}
                options={petTypeOptions}
                required
              />

              {formData.type && (
                <Select
                  label="Raza"
                  value={formData.breed}
                  onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                  options={breedOptions}
                  required
                />
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Fecha de Nacimiento"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  required
                />

                <Input
                  label="Edad (calculada automáticamente)"
                  value={calculateAge(formData.birthDate)}
                  disabled
                  placeholder="Se calcula automáticamente"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Color Primario"
                  value={formData.primaryColor}
                  onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                  required
                  placeholder="Ej: Negro, Blanco, Dorado"
                />

                <Input
                  label="Color Secundario (Opcional)"
                  value={formData.secondaryColor}
                  onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                  placeholder="Ej: Café, Gris"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/owner/profile')}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                >
                  Registrar Mascota
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
