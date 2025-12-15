// User Types
export type UserRole = 'owner' | 'veterinarian';

export interface User {
  id: string;
  username: string;
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
  role: UserRole;
  joinedDate: Date;
  avatar?: string;
}

// Pet Types
export type PetType = 'dog' | 'cat' | 'bird';

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  birthDate: Date;
  primaryColor: string;
  secondaryColor?: string;
  avatar?: string;
  ownerId: string;
  veterinarianId?: string;
}

// Veterinarian Types
export interface Veterinarian extends User {
  role: 'veterinarian';
  specialization?: string;
  licenseNumber?: string;
}

// Owner Types
export interface Owner extends User {
  role: 'owner';
  pets: Pet[];
  assignedVeterinarianId?: string;
}

// Appointment Types
export interface Appointment {
  id: string;
  petId: string;
  veterinarianId: string;
  ownerId: string;
  date: Date;
  reason: string;
  clinicalHistory: string;
  procedures: string[];
  prescription?: MedicalPrescription;
  observations: string;
  recommendations: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface MedicalPrescription {
  medications: Medication[];
  instructions: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

// Breed data by pet type
export const BREEDS_BY_TYPE: Record<PetType, string[]> = {
  dog: [
    'Labrador Retriever',
    'Golden Retriever',
    'Pastor Alemán',
    'Bulldog Francés',
    'Bulldog Inglés',
    'Beagle',
    'Poodle',
    'Rottweiler',
    'Yorkshire Terrier',
    'Boxer',
    'Dachshund',
    'Chihuahua',
    'Husky Siberiano',
    'Doberman',
    'Shih Tzu',
    'Mestizo',
  ],
  cat: [
    'Persa',
    'Siamés',
    'Maine Coon',
    'Bengalí',
    'Ragdoll',
    'British Shorthair',
    'Sphynx',
    'Abisinio',
    'Scottish Fold',
    'Angora',
    'Mestizo',
  ],
  bird: [
    'Loro Amazonas',
    'Loro Gris Africano',
    'Cacatúa',
    'Guacamayo',
    'Periquito',
    'Canario',
    'Agapornis',
    'Ninfa',
  ],
};

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}
