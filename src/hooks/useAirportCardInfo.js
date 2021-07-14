import useStoreOrigin from 'hooks/useStoreOrigin';
import useStoreDestination from 'hooks/useStoreDestination';

const useAirportCardInfo = ({ cardData, isDestination }) => {
  const { selectedOrigin, setSelectedOrigin } = useStoreOrigin();
  const { selectedDestination, setSelectedDestination } = useStoreDestination();

  const isSelectedCard = isDestination
    ? selectedDestination?.code === cardData.code
    : selectedOrigin?.code === cardData.code;

  const resetOrigin = () => {
    setSelectedOrigin(null);
    setSelectedDestination(null);
  };

  const selectOrigin = (cardData) => {
    setSelectedOrigin(cardData);
    setSelectedDestination(null);
  };

  const handleSelect = () => {
    isDestination
      ? isSelectedCard
        ? setSelectedDestination(null)
        : setSelectedDestination(cardData)
      : isSelectedCard
      ? resetOrigin()
      : selectOrigin(cardData);
  };

  return {
    isSelectedCard,
    handleSelect,
  };
};

export default useAirportCardInfo;
