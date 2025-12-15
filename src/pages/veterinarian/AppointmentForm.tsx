import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { ArrowLeft } from 'lucide-react';
import { mockPets, getOwnerById } from '../../data/mockData';

export const AppointmentForm: React.FC = () => {
  const navigate = useNavigate();
  const { petId } = useParams<{ petId: string }>();
  const pet = mockPets.find(p => p.id === petId);
  const owner = pet ? getOwnerById(pet.ownerId) : null;

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    reason: '',
    clinicalHistory: '',
    procedures: '',
    medicationName: '',
    dosage: '',
    frequency: '',
    duration: '',
    prescriptionInstructions: '',
    observations: '',
    recommendations: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cita médica registrada exitosamente!');
    navigate('/veterinarian/dashboard');
  };

  if (!pet || !owner) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-gray-500">Mascota no encontrada</p>
          <Button onClick={() => navigate('/veterinarian/dashboard')} className="mt-4">
            Volver al Dashboard
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/veterinarian/dashboard')}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Dashboard
        </button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Información del Paciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Mascota</p>
                <p className="font-medium text-gray-900">{pet.name} - {pet.breed}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PawUser</p>
                <p className="font-medium text-gray-900">{owner.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium text-gray-900">{owner.phone || 'No registrado'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Correo</p>
                <p className="font-medium text-gray-900">{owner.email}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Dirección</p>
                <p className="font-medium text-gray-900">{owner.address || 'No registrada'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Registro de Cita Médica</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="date"
                  label="Fecha de la Cita"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <Input
                  type="time"
                  label="Hora de la Cita"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </div>

              {/* Reason */}
              <Input
                label="Motivo de la Consulta"
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                required
                placeholder="Ej: Vacunación, Control de rutina, Emergencia"
              />

              {/* Clinical History */}
              <div>
                <label className="label">Historia Clínica</label>
                <textarea
                  className="input-field min-h-[100px]"
                  value={formData.clinicalHistory}
                  onChange={(e) => setFormData({ ...formData, clinicalHistory: e.target.value })}
                  required
                  placeholder="Describe el historial médico relevante..."
                />
              </div>

              {/* Procedures */}
              <div>
                <label className="label">Procedimientos a Realizar</label>
                <textarea
                  className="input-field min-h-[80px]"
                  value={formData.procedures}
                  onChange={(e) => setFormData({ ...formData, procedures: e.target.value })}
                  required
                  placeholder="Lista los procedimientos realizados o a realizar..."
                />
              </div>

              {/* Medical Prescription */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Receta Médica</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Medicamento"
                      value={formData.medicationName}
                      onChange={(e) => setFormData({ ...formData, medicationName: e.target.value })}
                      placeholder="Nombre del medicamento"
                    />
                    <Input
                      label="Dosificación"
                      value={formData.dosage}
                      onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                      placeholder="Ej: 500mg, 2 tabletas"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Frecuencia"
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                      placeholder="Ej: Cada 8 horas, 2 veces al día"
                    />
                    <Input
                      label="Duración"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="Ej: 7 días, 2 semanas"
                    />
                  </div>
                  <div>
                    <label className="label">Instrucciones de Administración</label>
                    <textarea
                      className="input-field min-h-[60px]"
                      value={formData.prescriptionInstructions}
                      onChange={(e) => setFormData({ ...formData, prescriptionInstructions: e.target.value })}
                      placeholder="Instrucciones especiales para administrar el medicamento..."
                    />
                  </div>
                </div>
              </div>

              {/* Observations */}
              <div>
                <label className="label">Observaciones</label>
                <textarea
                  className="input-field min-h-[80px]"
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  required
                  placeholder="Observaciones generales sobre el estado del paciente..."
                />
              </div>

              {/* Recommendations */}
              <div>
                <label className="label">Recomendaciones</label>
                <textarea
                  className="input-field min-h-[80px]"
                  value={formData.recommendations}
                  onChange={(e) => setFormData({ ...formData, recommendations: e.target.value })}
                  required
                  placeholder="Recomendaciones para el cuidado del paciente..."
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate('/veterinarian/dashboard')}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                >
                  Guardar Cita Médica
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};
