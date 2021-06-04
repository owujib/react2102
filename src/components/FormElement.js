import React from 'react';

export default function FormElement({ name, value, placeholder, type }) {
  return (
    <input type={type} name={name} placeholder={placeholder} value={value} />
  );
}
