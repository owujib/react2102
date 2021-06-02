import React from 'react';

const Food = () => {
  const foodList = [
    {
      name: 'Rice',
      type: 'fried rice',
    },
    {
      name: 'Beans',
      type: 'Fried Beans',
    },
    {
      name: 'Garri',
      type: 'Eba',
    },
    {
      name: 'Yam',
      type: 'Lafu',
    },
  ];

  const food = foodList.map((element) => {
    return (
      <div>
        <p>name: {element.name}</p>
        <p>Type: {element.type}</p>
      </div>
    );
  });
  return (
    <div>
      <h1>Food list</h1>
      <div className="d-flex">{food}</div>
    </div>
  );
};

export default Food;
