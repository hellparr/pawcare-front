import { differenceInYears, differenceInMonths, format } from 'date-fns';
import { es } from 'date-fns/locale';

export const calculateAge = (birthDate: Date): string => {
  const now = new Date();
  const years = differenceInYears(now, birthDate);
  
  if (years > 0) {
    return `${years} ${years === 1 ? 'año' : 'años'}`;
  }
  
  const months = differenceInMonths(now, birthDate);
  return `${months} ${months === 1 ? 'mes' : 'meses'}`;
};

export const formatDate = (date: Date): string => {
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: es });
};

export const formatDateTime = (date: Date): string => {
  return format(date, "d 'de' MMMM 'de' yyyy 'a las' h:mm a", { locale: es });
};

export const formatShortDate = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};
