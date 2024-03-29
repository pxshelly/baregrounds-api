import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import Bin from './Bin.jsx';
import Quiz from './Quiz.jsx';
import { images, bins } from '../../dist/images/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      bin: '',
      error: ''
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.getBin=this.getBin.bind(this);
  } 

  getBin() {
    axios.get(`/recyclables/${this.state.item}`)
      .then(({data}) => {
        if (data.length) {
          this.setState({bin: data[0].bin})
        } else {
          this.setState({error: 'This item cannot be found.'});
        }
      })
      .catch((error) => console.log(error))
  }

  handleInputChange(trash) {
    this.setState({item: trash})
  }

  render() {
    if (this.state.bin) {
      return (
        <div>
          <h1>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Bin bin={this.state.bin} />
      </div>
      )
    } else {
      return (
        <div>
          <h1>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <p className='error'>{this.state.error}</p>
          <img className='meadow' src={images.meadow}/>
          <br/>
          <img className='mainBins' src={bins.mainBins} />
          <Quiz submitAnswer={this.submitAnswer} handleRadioButton={this.handleRadioButton}/>
        </div>
      )
    }
  }
}

export default App;
