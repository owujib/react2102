import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Cars from './components/Cars';
import Food from './components/Food';
import FormElement from './components/FormElement';

function App() {
  const data = {
    carList: [
      {
        name: 'Rolls Royce',
        type: 'Sweptail',
      },
      {
        name: 'Mercedes Benz',
        type: 'G33',
      },
      {
        name: 'Bentley',
        type: 'Bentayga',
      },
      {
        name: 'BMW',
        type: 'inext',
      },
      {
        name: 'Lamborghine',
        type: 'Urus',
      },
      {
        name: 'Porche',
        type: '911',
      },
    ],
    foodList: [
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
    ],
  };

  return (
    <div>
      <Cars list={data.carList} />
      <Food list={data.foodList} />

      <div className="d-flex">
        <Profile
          firstname="John"
          lastname="Doe"
          age={32}
          classname="bg-red"
          hobbies={['Eating', 'Sleeping', 'Movies']}
        />
        <Profile
          firstname="Jane"
          lastname="Doe"
          classname="bg-blue"
          age={29}
          hobbies={['Traveling', 'Dancing', 'Reading']}
        />
        <Profile
          firstname="Steve"
          lastname="Wonder"
          classname="bg-aqua"
          age={29}
          hobbies={['Traveling', 'Dancing', 'Reading']}
        />
      </div>
      <FormElement type="password" placeholder="enter your password" />
      <FormElement type="email" placeholder="enter your email" />
      <FormElement type="text" placeholder="enter your text" />
      <FormElement type="button" value="my test button" />
      <FormElement type="submit" value="my submit button" />
      <FormElement type="reset" value="my reset button" />
      <FormElement type="range" />
      <FormElement type="color" />
    </div>
  );
}

export default App;
