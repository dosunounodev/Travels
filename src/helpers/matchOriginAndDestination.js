import { epaCor } from 'data/epaCor';
import { epaMdz } from 'data/epaMdz';

export const matchOriginAndDestination = (origin, destination) => {
  if (origin === 'EPA' && destination === 'COR') return epaCor;
  if (origin === 'COR' && destination === 'EPA') return epaCor;
  if (origin === 'EPA' && destination === 'MDZ') return epaMdz;
  if (origin === 'MDZ' && destination === 'EPA') return epaMdz;

  return [];
};
