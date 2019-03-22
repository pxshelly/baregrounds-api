import React from 'react';


class Landfill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='disposeText'>
        <br/> dispose in LANDFILL bin
        <img className='landfillBin' src='https://s3.amazonaws.com/baregrounds/greybin.png'/>
      </div>
    )
  }
}

export default Landfill;