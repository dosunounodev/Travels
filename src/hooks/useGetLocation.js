import { useLocation } from 'react-router-dom';

export const useGetLocation = () => {
  const location = useLocation();

  switch (location.pathname.toLowerCase()) {
    case '/':
      return 'Welcome';
    case '/select':
      return 'Select';
    case '/flights':
      return 'Flights';
    default:
      return '404';
  }
};
