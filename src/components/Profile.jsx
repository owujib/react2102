import React from 'react';

export default function Profile(props) {
  const { firstname, lastname, age, hobbies, classname } = props;
  let hobby = hobbies.map((element, id) => {
    return <li key={id}>{element}</li>;
  });
  return (
    <div
      className={classname}
      style={{ padding: '10px', color: ' #fff', fontSize: '20px' }}
    >
      <div style={cardStyle}>
        <h1>My profile</h1>
        <h4>Firstname: {firstname}</h4>
        <h4>Lastname: {lastname}</h4>
        <h4>Age: {age}</h4>
        <ul style={hobbyStyle}>{hobby}</ul>
      </div>
    </div>
  );
}

const cardStyle = {
  border: '1px solid black',
  padding: '40px',
  borderRadius: '20px',
};

const hobbyStyle = {
  backgroundColor: '#fff',
  color: '#000',
  borderRadius: '20px',
};
