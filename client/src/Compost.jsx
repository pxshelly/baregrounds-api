import React from 'react';
import { bins } from '../dist/images/index';

class Compost extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposal-container'>
        compost
        <br/>
        <img className='compostBin' src={bins.greenBin}/>
      </div>
    )
  }
}

export default Compost;