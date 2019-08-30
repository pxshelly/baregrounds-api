import React from 'react';


class Landfill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in LANDFILL bin
        <img className='landfillBin' src='https://baregrounds.s3-us-west-2.amazonaws.com/greybin.png'/>
      </div>
    )
  }
}

export default Landfill;