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
		if (isCorrect === true) {
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
    {showScore ? (
				<div className='score-section'>
            <div className='final-result'>
              <img src={LOGO} className='logo'></img>
              <h2>Final Result</h2>
            </div>
            
					  <h3>{score} / {results.length}</h3>
            <h4>Your Score</h4>
            <button onClick={() => playAgain()}>PLAY AGAIN</button>
				</div>
			) : 
        ( 
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
          <div className="btn">
            <button className='btn-true' onClick={() => btnOnclickAnswer(results[currentQuestion].isCorrect)}>
              <BsCheck className='icons'></BsCheck>True
            </button>
            <button className='btn-false' onClick={() => btnOnclickAnswer(results[currentQuestion].isCorrect)}>
              <BsX className='icons'></BsX>False
            </button>
          </div>
        </>
        )}
    </div>
  </div>
  )
}
