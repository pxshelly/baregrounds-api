import React from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import Recycle from './Recycle.jsx';
import Compost from './Compost.jsx';
import Landfill from './Landfill.jsx';
import Quiz from './Quiz.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      bin: '',
    };
    this.handleInputChange=this.handleInputChange.bind(this);
    this.getBin=this.getBin.bind(this);
  } 

  getBin() {
    axios.get(`/recyclables/${this.state.item}`)
      .then(({data}) => {
        this.setState({bin: data[0].bin})
      })
      .catch((error) => console.log(error))
  }

  handleInputChange(trash) {
    this.setState({item: trash})
  }

  render() {
    if (this.state.bin === 'recycle') {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Recycle />
          <img className='meadow' src='https://s3.amazonaws.com/baregrounds/meadow.png'/>
          <img className='mainBins' src='https://s3.amazonaws.com/baregrounds/allBins.png' />
      </div>
      )
    } else if (this.state.bin === 'compost') {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Compost />
          <img className='meadow' src='https://s3.amazonaws.com/baregrounds/meadow.png'/>
          <img className='mainBins' src='https://s3.amazonaws.com/baregrounds/allBins.png' />
      </div>
      )
    } else if (this.state.bin === 'landfill') {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Landfill />
          <img className='meadow' src='https://s3.amazonaws.com/baregrounds/meadow.png'/>
          <img className='mainBins' src='https://s3.amazonaws.com/baregrounds/allBins.png' />
      </div>
      )
    } else {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <img className='meadow' src='https://s3.amazonaws.com/baregrounds/meadow.png'/>
          <img className='mainBins' src='https://s3.amazonaws.com/baregrounds/allBins.png' />
          <Quiz submitAnswer={this.submitAnswer} handleRadioButton={this.handleRadioButton}/>
        </div>
      )
    }
  }
}

export default App;