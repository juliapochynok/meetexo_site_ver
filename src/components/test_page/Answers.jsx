import React, { Component, Fragment } from "react";
import './Tests.css';


export default class Tests extends Component {
    //  create state
    state = {
        answers: this.props.answer,
        click:true,
        right_answer: this.props.right_answer
    };

    // Event on button
    onAnswer = () => {
        this.setState({ 
        click:false
        });
    };
  
  render() {
    return (
      <Fragment>
        { this.state.click ? this.state.answers.map(ans => {
          return <button className="answ" onClick={this.onAnswer}> {ans}</button>;
        }) : <button className="answ_right"> {this.state.right_answer}</button>  } 

      </Fragment>
    );
  }

}