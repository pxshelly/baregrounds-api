import React from 'react';

class Recycle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in RECYCLE bin
        <br/> 
        <br/> <img className='recycleBin' src='https://baregrounds.s3-us-west-2.amazonaws.com/bluebin.png'/>
      </div>
    )
  }
}

export default Recycle;