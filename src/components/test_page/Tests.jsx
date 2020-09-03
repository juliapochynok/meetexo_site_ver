import React, { Component,  Fragment } from 'react'
import './Tests.css';
import Answer from "./Answers";

let q1 ={ 
      question: "How many members are in EXO?",
      answers:["5", "9", "12"], 
      right_answer:"9"
    }

let q2 ={ 
      question: "What is official name of EXO fandom?",
      answers:["EXO-L", "EXOtics", "EXO Planet"], 
      right_answer:"EXO-L"
    }

let q3 ={ 
      question: "Which of these is EXO debut song?",
      answers:["Wolf", "History", "MAMA"], 
      right_answer:"MAMA"
    }

let q4 ={ 
      question: "Which colour is official colour of EXO's fandom?",
      answers:["Silver", "White", "Cosmic Latte"], 
      right_answer:"Cosmic Latte"
    }

let q5 ={ 
    question: "Who is the first member, who went to army?",
    answers:["Suho", "D.O", "Xiumin"], 
    right_answer:"Xiumin"
    }

let q6 ={ 
    question: "Who of these people is EXO's ex-member?",
    answers:["Kris Wu", "Taemin", "Yixing"], 
    right_answer:"Kris Wu"
    }

let q7 ={ 
    question: "How many Daesang(the highest prize for a singer/band for achievements in the year) EXO has?",
    answers:["12", "54", "23"], 
    right_answer:"23"
    }

let q8 ={ 
    question: "What is Chanyeol's tattoo about EXO's fans?",
    answers:["Cosmic9", "AERIS", "L-1485"], 
    right_answer:"L-1485"
    }

let q9 ={ 
    question: "What is overall capacity of EXO's biggest concert tour?",
    answers:["742,856", "97,432", "543,122"], 
    right_answer:"742,856"
    }



export default class Tests extends Component {

    render() {
        return (
          <div>
            <h1 className="MainTestHeader">EASY</h1>
            <div className="Q"> 
                <h2 className="T"> { q1.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q1.right_answer} answer={ q1.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q2.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q2.right_answer} answer={ q2.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q3.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q3.right_answer} answer={ q3.answers} />
                </div>
            </div>

            <h1 className="MainTestHeader">MEDIUM</h1>
            <div className="Q"> 
                <h2 className="T"> { q4.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q4.right_answer} answer={ q4.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q5.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q5.right_answer} answer={ q5.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q6.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q6.right_answer} answer={ q6.answers} />
                </div>
            </div>

            <h1 className="MainTestHeader">HARD</h1>
            <div className="Q"> 
                <h2 className="T"> { q7.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q7.right_answer} answer={ q7.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q8.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q8.right_answer} answer={ q8.answers} />
                </div>
            </div>

            <div className="Q"> 
                <h2 className="T"> { q9.question}</h2> 
                <div className="AnswersAll">
                <Answer right_answer={ q9.right_answer} answer={ q9.answers} />
                </div>
            </div>


          </div>

        )
    }
}