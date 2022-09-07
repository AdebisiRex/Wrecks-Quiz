import React from 'react'


import "./styles/welcome-page.css"

const WelcomePage = () => {
  return (
    <>
    <div className='body-orange bg-gradient'>
        <div className="col-12  col-sm-7 col-md-5 mx-auto shadow dog h-100">
          <div className='mx-auto welcome text-center'>
            <p className='m-0'>Welcome to</p>
            <h2 className='m-0 display-3 fw-bolder text-highlight'>Wrecks Quiz</h2>
            <small className='fw-bold '>or you might say Rex Quizs</small>
          </div>

          <button className='px-4 shadow btn border-3 get-started'> Get Started</button>

        </div>
        
        

    </div>
    </>
  )
}

export default WelcomePage