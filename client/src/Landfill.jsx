import React from 'react';
import { bins } from '../../dist/images/index';

class Landfill extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='disposal-container'>
        landfill
        <br/>
        <img className='landfillBin' src={bins.greyBin}/>
      </div>
    )
  }
}

export default Landfill;