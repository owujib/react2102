import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const carList = [
//   {
//     name: 'Rolls Royce',
//     model: 'Sweptail',
//   },
//   {
//     name: 'Mercedes Benz',
//     model: 'G33',
//   },
//   {
//     name: 'Bentley',
//     model: 'Bentayga',
//   },
//   {
//     name: 'BMW',
//     model: 'inext',
//   },
//   {
//     name: 'Lamborghine',
//     model: 'Urus',
//   },
//   {
//     name: 'Porche',
//     model: '911',
//   },
// ];

// function Cars() {
//   let cars = carList.map((element) => {
//     return <li>name: {element.name}</li>;
//   });
//   return (
//     <div>
//       <h1>My cars {'My name is favour'} </h1>
//       <ol>{cars}</ol>
//     </div>
//   );
// }

// ReactDOM.render(<Cars />, document.getElementById('cars'));
