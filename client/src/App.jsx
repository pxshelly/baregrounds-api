import React from 'react';
import Form from './Form.jsx';
import axios from 'axios';
import Recycle from './Recycle.jsx';
import Compost from './Compost.jsx';
import Landfill from './Landfill.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      bin: ''
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
      </div>
      )
    } else if (this.state.bin === 'compost') {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Compost />
      </div>
      )
    } else if (this.state.bin === 'landfill') {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
          <Landfill />
      </div>
      )
    } else {
      return (
        <div>
          <h1 id='title'>baregrounds</h1>
          <Form handleInputChange={this.handleInputChange} getBin={this.getBin}/>
        </div>
      )
    }
  }
}

export default App;