import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type='text'/>
        <input type='button' value='goes there'/>
      </form>
    )
  }
}

export default Form;