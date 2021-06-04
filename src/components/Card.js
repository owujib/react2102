import React from 'react';

export default function Card({ id, name, type }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
    </div>
  );
}
