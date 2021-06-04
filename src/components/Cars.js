import React from 'react';
import Card from './Card';

const Cars = (props) => {
  const { list } = props;

  const cars = list.map((element, id) => {
    return <Card {...element} id={id} />;
  });
  return (
    <div>
      <h1>My cars List 🚗</h1>
      <div className="d-flex">{cars}</div>
    </div>
  );
};

export default Cars;
