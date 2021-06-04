import React from 'react';

const Food = (props) => {
  const { list } = props;
  const food = list.map((element) => {
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
