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
  
  const btnClickHandler = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  return (
    <div className="page page-home bg-image">
    <div className='container quiz-container'>
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
      <div className="btn" onClick={btnClickHandler}>
        <button className='btn-true'>
          <BsCheck className='icons'></BsCheck>{results[currentQuestion].correct_answer}
        </button>
        <button className='btn-false'>
          <BsX className='icons'></BsX>{results[currentQuestion].incorrect_answers}
        </button>
      </div>
    </div>
  </div>
  )
}
