import React from 'react'
import { Link } from 'react-router-dom'
import CNAME from '../images/zeniark-logo.png'

export default function HomePage() {
  return (
      <div className="page page-home bg-image">
      <div className='container'>
        <div className="page-title">
          <img src={CNAME} className='cname'></img>
          <h1>Welcome to the Trivia Challenge!</h1>
        </div>
        <div className="page-body">
          <p>You will be presented with 10 True or False questions.</p>
          <p className='highlights'>Can you score 10/10?</p>
        </div>
        <div className="page-control">
          <button className='btn-start'>
            <Link to="./quiz">LET’S START!</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
