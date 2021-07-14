export const getTimeData = (departureDate, arrivalDate) => {
  const departure = new Date(departureDate);
  const arrival = new Date(arrivalDate);

  const duration = arrival - departure;

  const minutesDuration = duration / 1000 / 60;

  return {
    departureTime: departure.toLocaleString(),
    arrivalTime: arrival.toLocaleString(),
    minutesDuration,
  };
};
