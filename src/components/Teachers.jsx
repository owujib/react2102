import React from 'react';

class Teachers extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { teachers } = this.props;
    return (
      <div>
        <h1>Teachers</h1>
        <div>
          {teachers.map((element) => {
            return (
              <div>
                <p>Teacher's Name: {element.name}</p>
                <p>Teacher's email: {element.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Teachers;
