import React from 'react';

function Phone() {
  const phoneList = [
    { name: 'Tecno', type: 'Camon 15' },
    { name: 'Infinix', type: 'Smart 5' },
    { name: 'Samsung', type: 's21 ultra' },
    { name: 'Iphone', type: 'iphone 13' },
  ];

  return (
    <div>
      <h1>Phone List</h1>
      <div className="d-flex">
        {phoneList.map((element) => {
          return (
            <div>
              <p>Name: {element.name}</p>
              <p>Type: {element.type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Phone;
