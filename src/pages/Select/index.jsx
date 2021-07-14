import React from 'react';
import CardAirport from 'components/CardAirport';
// import routes from 'data/routes';

const Select = () => {
  return (
    <>
      <section>
        <h2>Choose your origin</h2>
        <CardAirport />
      </section>
      <section>
        <h2>Choose your destination</h2>
        <CardAirport />
      </section>
    </>
  );
};

export default Select;
