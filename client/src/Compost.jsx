import React from 'react';

class Compost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in COMPOST bin
        <img className='compostBin' src='https://baregrounds.s3-us-west-2.amazonaws.com/greenbin.png'/>
      </div>
    )
  }
}

export default Compost;