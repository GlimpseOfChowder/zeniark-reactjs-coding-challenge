import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from '../images/logo.png'
import { BsCheck } from "react-icons/bs"
import { BsX } from "react-icons/bs"
import { useState } from 'react'
import data from '../data.json'

export const quiz = () => {

  const results = data.results;

  return (
    <div className="page page-home bg-image">
    <div className='container quiz-container'>
      <div className="page-category">
        <img src={LOGO} className='logo'></img>
            <div className='flex-row'>
                <h3>Category: {results.category}</h3>
                <p>1 out of {results.length}</p>
            </div>
      </div>
      <hr></hr>
      <div className="questions">
        <p>{results.question}</p>
      </div>
      <hr></hr>
      <div className="btn">
        <button className='btn-true'>
          <BsCheck className='icons'></BsCheck> True
        </button>
        <button className='btn-false'>
          <BsX className='icons'></BsX> False
        </button>
      </div>
    </div>
  </div>
  )
}


export default quiz