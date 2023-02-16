import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/logo.png'
import { BsCheck } from "react-icons/bs"
import { BsX } from "react-icons/bs"
import { useState } from 'react'
import data from '../data.json'

export default function Quiz() {

  const results = data.results;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const btnOnclickAnswer = (isCorrect) => {
		if (isCorrect === results[currentQuestion].isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < results.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

  const playAgain = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  }
  
  return (
    <div className="page page-home bg-image">
    <div className='container quiz-container'>
    
    {showScore ? ( //Show results tab
				<div className='score-section'>
            <div className='final-result'>
              <img src={LOGO} className='logo'></img>
              <h3>Final Results</h3>
            </div>
            <hr></hr>
            
					  <h3>{score} / {results.length}</h3>
            <h4>Your Score</h4>
            <hr></hr>
            <ol>
              <li>{results[currentQuestion].question}</li>
            </ol>
            <hr></hr>
            <button className='play-again' onClick={() => playAgain()}>PLAY AGAIN</button>
				</div>
			) : 
        ( //Show questionnaire
          <>
          <div className="page-category">
            <img src={LOGO} className='logo'></img>
                <div className='flex-row'>
                    <h3>Category: {results[currentQuestion].category}</h3>
                    <p>{currentQuestion + 1} out of {results.length}</p>
                </div>
          </div>
          <hr></hr>

          <div className="questions">
            <p>{results[currentQuestion].question}</p>
          </div>
          
          <hr></hr>
          <div className="btn"  onClick={() => btnOnclickAnswer(results[currentQuestion].isCorrect)}>
            <button className='btn-true'>
              <BsCheck className='icons'></BsCheck>True
            </button>
            <button className='btn-false'>
              <BsX className='icons'></BsX>False
            </button>
          </div>
        </>
        )}
    </div>
  </div>
  )
}
