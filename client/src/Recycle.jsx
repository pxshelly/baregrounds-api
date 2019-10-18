import React from 'react';
import { bins } from '../dist/images/index';

class Recycle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='disposal-container'>
        recycle 
        <br/> <img className='recycleBin' src={bins.blueBin}/>
      </div>
    )
  }
}

export default Recycle;