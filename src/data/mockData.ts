import type { User, Pet, Appointment, Veterinarian, Owner } from '../types';

// Mock Veterinarians
export const mockVeterinarians: Veterinarian[] = [
  {
    id: 'vet-1',
    username: 'dra.martinez',
    fullName: 'Dra. María Martínez',
    email: 'maria.martinez@pawcare.com',
    phone: '+57 300 123 4567',
    address: 'Calle 45 #23-10, Bogotá',
    role: 'veterinarian',
    joinedDate: new Date('2022-01-15'),
    specialization: 'Medicina General',
    licenseNumber: 'VET-2022-001',
  },
  {
    id: 'vet-2',
    username: 'dr.rodriguez',
    fullName: 'Dr. Carlos Rodríguez',
    email: 'carlos.rodriguez@pawcare.com',
    phone: '+57 301 234 5678',
    address: 'Carrera 15 #78-45, Medellín',
    role: 'veterinarian',
    joinedDate: new Date('2021-06-20'),
    specialization: 'Cirugía',
    licenseNumber: 'VET-2021-045',
  },
  {
    id: 'vet-3',
    username: 'dra.lopez',
    fullName: 'Dra. Ana López',
    email: 'ana.lopez@pawcare.com',
    phone: '+57 302 345 6789',
    address: 'Avenida 68 #12-34, Cali',
    role: 'veterinarian',
    joinedDate: new Date('2023-03-10'),
    specialization: 'Dermatología',
    licenseNumber: 'VET-2023-012',
  },
];

// Mock Pets
export const mockPets: Pet[] = [
  {
    id: 'pet-1',
    name: 'Max',
    type: 'dog',
    breed: 'Labrador Retriever',
    birthDate: new Date('2020-05-15'),
    primaryColor: 'Dorado',
    secondaryColor: 'Blanco',
    ownerId: 'owner-1',
    veterinarianId: 'vet-1',
  },
  {
    id: 'pet-2',
    name: 'Luna',
    type: 'cat',
    breed: 'Siamés',
    birthDate: new Date('2021-08-22'),
    primaryColor: 'Crema',
    secondaryColor: 'Marrón',
    ownerId: 'owner-1',
    veterinarianId: 'vet-1',
  },
  {
    id: 'pet-3',
    name: 'Rocky',
    type: 'dog',
    breed: 'Pastor Alemán',
    birthDate: new Date('2019-03-10'),
    primaryColor: 'Negro',
    secondaryColor: 'Café',
    ownerId: 'owner-2',
    veterinarianId: 'vet-2',
  },
  {
    id: 'pet-4',
    name: 'Mimi',
    type: 'cat',
    breed: 'Persa',
    birthDate: new Date('2022-01-05'),
    primaryColor: 'Blanco',
    ownerId: 'owner-2',
    veterinarianId: 'vet-1',
  },
  {
    id: 'pet-5',
    name: 'Coco',
    type: 'bird',
    breed: 'Loro Amazonas',
    birthDate: new Date('2020-11-18'),
    primaryColor: 'Verde',
    secondaryColor: 'Amarillo',
    ownerId: 'owner-3',
    veterinarianId: 'vet-3',
  },
];

// Mock Owners
export const mockOwners: Owner[] = [
  {
    id: 'owner-1',
    username: 'juan.perez',
    fullName: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+57 310 123 4567',
    address: 'Calle 100 #15-20, Bogotá',
    role: 'owner',
    joinedDate: new Date('2023-01-10'),
    pets: mockPets.filter(p => p.ownerId === 'owner-1'),
    assignedVeterinarianId: 'vet-1',
  },
  {
    id: 'owner-2',
    username: 'maria.gomez',
    fullName: 'María Gómez',
    email: 'maria.gomez@email.com',
    phone: '+57 311 234 5678',
    address: 'Carrera 50 #30-40, Medellín',
    role: 'owner',
    joinedDate: new Date('2023-03-15'),
    pets: mockPets.filter(p => p.ownerId === 'owner-2'),
    assignedVeterinarianId: 'vet-2',
  },
  {
    id: 'owner-3',
    username: 'carlos.silva',
    fullName: 'Carlos Silva',
    email: 'carlos.silva@email.com',
    phone: '+57 312 345 6789',
    address: 'Avenida 5 #25-15, Cali',
    role: 'owner',
    joinedDate: new Date('2023-06-20'),
    pets: mockPets.filter(p => p.ownerId === 'owner-3'),
    assignedVeterinarianId: 'vet-3',
  },
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: 'apt-1',
    petId: 'pet-1',
    veterinarianId: 'vet-1',
    ownerId: 'owner-1',
    date: new Date('2024-11-20T10:00:00'),
    reason: 'Vacunación anual',
    clinicalHistory: 'Paciente sano, sin antecedentes de enfermedades graves',
    procedures: ['Vacuna antirrábica', 'Vacuna polivalente'],
    prescription: {
      medications: [
        {
          name: 'Vitamina C',
          dosage: '500mg',
          frequency: 'Una vez al día',
          duration: '30 días',
        },
      ],
      instructions: 'Administrar con alimento',
    },
    observations: 'Mascota en buen estado general',
    recommendations: 'Mantener calendario de vacunación al día',
    status: 'completed',
  },
  {
    id: 'apt-2',
    petId: 'pet-2',
    veterinarianId: 'vet-1',
    ownerId: 'owner-1',
    date: new Date('2024-11-25T14:30:00'),
    reason: 'Control de rutina',
    clinicalHistory: 'Primera consulta',
    procedures: ['Examen físico general', 'Desparasitación'],
    observations: 'Gato en excelente condición',
    recommendations: 'Desparasitar cada 3 meses',
    status: 'scheduled',
  },
];

// All users combined for authentication
export const mockUsers: User[] = [
  ...mockOwners,
  ...mockVeterinarians,
];

// Helper functions to get data
export const getPetsByOwnerId = (ownerId: string): Pet[] => {
  return mockPets.filter(pet => pet.ownerId === ownerId);
};

export const getPetsByVeterinarianId = (veterinarianId: string): Pet[] => {
  return mockPets.filter(pet => pet.veterinarianId === veterinarianId);
};

export const getVeterinarianById = (veterinarianId: string): Veterinarian | undefined => {
  return mockVeterinarians.find(vet => vet.id === veterinarianId);
};

export const getOwnerById = (ownerId: string): Owner | undefined => {
  return mockOwners.find(owner => owner.id === ownerId);
};

export const getAppointmentsByPetId = (petId: string): Appointment[] => {
  return mockAppointments.filter(apt => apt.petId === petId);
};

export const getAppointmentsByVeterinarianId = (veterinarianId: string): Appointment[] => {
  return mockAppointments.filter(apt => apt.veterinarianId === veterinarianId);
};
