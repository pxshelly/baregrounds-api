import React from 'react';

let quizPairs = [
  ['paper','recycle'], ['olives','compost'], ['pens', 'landfill'], ['broken glass', 'landfill'], ['coffee filter', 'compost'], ['disposable razors', 'landfill'], ['light bulbs', 'landfill'], ['plastic bucket', 'recycle']
];

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      quiz: null
    }
  }
  
  handleRadioButton(answer) {
    this.state.answer = answer;
  }
  
  submitAnswer () {
    if (this.state.answer === this.state.quiz[1]) {
      alert('That\'s correct!');
      this.randomizeQuiz();
    } else {
      alert('Try again');
    }
  }
  
  randomizeQuiz () {
    let randomIndex = Math.floor(Math.random() * quizPairs.length);
    this.setState({quiz: quizPairs[randomIndex]});
  }

  componentDidMount() {
    this.randomizeQuiz()
  }

  render() {
    return(
      <div className = 'quiz'>
        <h2>Test your super knowledge!</h2>
        Which bin does {this.state.quiz && this.state.quiz[0]} belong in?
        <br/>
        <br/> 
        <form>
          <input type='radio' name='quiz' value='recycle' onClick={(event) => {this.handleRadioButton(event.target.value)}} /> Recycle <br/>
          <input type='radio' name='quiz' value='compost' onClick={(event) => {this.handleRadioButton(event.target.value)}} /> Compost <br/>
          <input type='radio' name='quiz' value='landfill' onClick={(event) => {this.handleRadioButton(event.target.value)}} /> Landfill <br/>
          <br/> <button type="button" className='submitButton' value='Answer' onClick={() => {this.submitAnswer()}}>Answer</button>
        </form>
      </div>
    )
  }
}

export default Quiz;