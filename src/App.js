import React from 'react';
import Form from './components/Form';
import FormElement from './components/FormElement';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      text: '',
      students: [
        { id: 1, name: 'David', email: 'david@email.com' },
        { id: 2, name: 'Tobi', email: 'tobi@email.com' },
        { id: 3, name: 'Mark', email: 'mark@email.com' },
        { id: 4, name: 'Queen', email: 'queen@email.com' },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleClick = () => {
    //if state === true //set it to false
    this.setState({
      show: false,
    });
  };

  addStudent = (incomingState) => {
    let newId = this.state.students.length + 1;
    let newStudent = { id: newId, ...incomingState };
    this.setState({
      students: [...this.state.students, newStudent],
    });
  };
  render() {
    let { students } = this.state;
    return (
      <div>
        {students.map((student) => {
          return (
            <div>
              <p>name: {student.name}</p>
              <p>email: {student.email}</p>
            </div>
          );
        })}

        <Form addStudent={this.addStudent} />

        <h1>Hello React</h1>
        <button type="button" onClick={this.handleClick}>
          hide box
        </button>
        {/* {!this.state.show ? 'hey' : 'me'} */}
        {this.state.show && (
          <div
            style={{
              width: '400px',
              height: '400px',
              backgroundColor: 'green',
            }}
          ></div>
        )}

        <h1>Text: {this.state.text}</h1>
        {/* 
        <input
          type="text"
          placeholder="enter your text"
          value={this.state.text}
          onChange={this.handleChange}
        /> */}

        <FormElement
          type="text"
          placeholder="enter your text"
          value={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
