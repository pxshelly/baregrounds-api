import React from 'react';

class Recycle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in the RECYCLE bin
        <br/> 
        <br/> <img className='individualBins' src='https://s3.amazonaws.com/baregrounds/bluebin.png'/>
      </div>
    )
  }
}

export default Recycle;