import React from 'react';

const Cars = (props) => {
  const carList = [
    {
      name: 'Rolls Royce',
      model: 'Sweptail',
    },
    {
      name: 'Mercedes Benz',
      model: 'G33',
    },
    {
      name: 'Bentley',
      model: 'Bentayga',
    },
    {
      name: 'BMW',
      model: 'inext',
    },
    {
      name: 'Lamborghine',
      model: 'Urus',
    },
    {
      name: 'Porche',
      model: '911',
    },
  ];

  console.log(props);
  const carItem = carList.map((element) => {
    return (
      <div>
        <p>Name: {element.name}</p>
        <p>Model: {element.model}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>My cars List 🚗</h1>
      <div className="d-flex">{carItem}</div>
    </div>
  );
};

export default Cars;
