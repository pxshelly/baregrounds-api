import React from 'react';
import { bins } from '../../dist/images/index';

class Bin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const bin = this.props.bin;
    return (
      <div className='disposal-container'>
        {this.props.bin}
        <br/>
        <img className={`${bin}Bin`} src={bins[bin]}/>
      </div>
    )
  }
}

export default Bin;
