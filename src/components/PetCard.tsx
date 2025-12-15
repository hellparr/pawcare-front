import React from 'react';
import type { Pet } from '../types';
import { calculateAge, formatShortDate } from '../utils/dateUtils';
import { Dog, Cat, Bird } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

interface PetCardProps {
  pet: Pet;
  ownerName?: string;
  onClick?: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ pet, ownerName, onClick }) => {
  const PetIcon = pet.type === 'dog' ? Dog : pet.type === 'cat' ? Cat : Bird;
  
  return (
    <Card onClick={onClick} className="hover:shadow-xl transition-all">
      <CardContent>
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0">
            <PetIcon className="w-10 h-10 text-white" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-gray-800 truncate">
              {pet.name}
            </h4>
            <p className="text-sm text-gray-600">
              {pet.breed}
            </p>
            <div className="mt-2 space-y-1">
              <p className="text-xs text-gray-500">
                <span className="font-medium">Nacimiento:</span> {formatShortDate(pet.birthDate)}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Edad:</span> {calculateAge(pet.birthDate)}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Color:</span> {pet.primaryColor}
                {pet.secondaryColor && ` / ${pet.secondaryColor}`}
              </p>
              {ownerName && (
                <p className="text-xs text-gray-500">
                  <span className="font-medium">PawUser:</span> {ownerName}
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
