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
				<div>
            <div className='final-result'>
              <img src={LOGO} className='logo' alt=""></img>
              <h3>Final Results</h3>
            </div>
            <hr></hr>
            <div className='score-section'>
              <h2>{score} / {results.length}</h2>
              <h4>Your Score</h4>
            </div>
            <hr></hr>
            <ol>
              <li></li>
            </ol>
            <hr></hr>
            <button className='play-again' onClick={() => playAgain()}>PLAY AGAIN</button>
				</div>
			) : 
        ( //Show questionnaire
          <>
          <div className="page-category">
            <img src={LOGO} className='logo' alt=''></img>
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
