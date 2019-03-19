import React from 'react';

class Compost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in the COMPOST bin
        <br/> 
        <br/> <img className='individualBins' src='https://s3.amazonaws.com/baregrounds/greenbin.png'/>
      </div>
    )
  }
}

export default Compost;