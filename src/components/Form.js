import React from 'react';
import FormElement from './FormElement';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormElement
          type="text"
          placeholder="enter student name"
          value={this.state.name}
          name="name"
          onChange={this.handleChange}
        />{' '}
        <br />
        <br />
        <FormElement
          type="email"
          name="email"
          placeholder="enter student email"
          value={this.state.email}
          onChange={this.handleChange}
        />{' '}
        <br />
        <br />
        <FormElement type="submit" value="add new student" />
      </form>
    );
  }
}

export default Form;
