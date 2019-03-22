import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input className='searchBar' type='text' onChange={(event) => {this.props.handleInputChange(event.target.value)}} />
        <input className='submitButton' type='button' value='goes there' onClick={this.props.getBin}/>
      </form>
    )
  }
}

export default Form;