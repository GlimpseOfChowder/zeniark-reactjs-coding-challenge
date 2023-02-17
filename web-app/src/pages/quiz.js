import React from 'react'
import LOGO from '../images/logo.png'
import { useState } from 'react'
import data from '../data.json'

export default function Quiz() {

  const results = data.results;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < results.slice(0,10).length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const playAgain = () => {
    //const randomizedQuestion = Math.floor(Math.random * results.length);
    setCurrentQuestion(0)
    setScore(0);
    setShowScore(false);
  }
  

  return (
    <div className="page page-home bg-image">
    <div className='container quiz-container'>
    
    {showScore ? ( //Show results tab
				<div>
            <div className='final-result'>
              <img src={LOGO} className='logo' alt=""></img>
              <h3>Final Results</h3>
            </div>
            <hr></hr>
            <div className='score-section'>
              <h2>{score} / {results.slice(0,10).length}</h2>
              <h4>Your Score</h4>
            </div>
            <hr></hr>
            <ol className='lists'>
            {
              results.map(record => {
                return(  //trying to conditionally style inline css if true / false = <span style={{color: isTrueFalse ? "#4fbd1b" : "#e04e10;"}}>           
                  <li>{record.question}
                    <h5 className='list'>The correct answer is<span style={{color: "#085696"}}>{record.correct_answer}</span>.</h5>
                  </li>
                )
              })
            }
            </ol>
            <button className='play-again' onClick={() => playAgain()}>PLAY AGAIN</button>
				</div>
			) : 
        ( //Show questionnaire
          <>
          <div className="page-category">
            <img src={LOGO} className='logo' alt=''></img>
                <div className='flex-row'>
                    <h3>Category: {results[currentQuestion].category}</h3>
                    <p>{currentQuestion + 1} out of {results.slice(0,10).length}</p>
                </div>
          </div>
          <hr></hr>

          <div className="questions">
            <p>{results[currentQuestion].question}</p>
          </div>

          <hr></hr>
          <div className="btn">
          {results[currentQuestion].answerOptions.map((answerOption) => (  
							<button className='btn-custom' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
              {answerOption.answerText}
              </button>
					))}
          </div> 
        </>
        )}
    </div>
  </div>
  )
}
