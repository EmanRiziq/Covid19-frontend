import React from 'react'
import NavBar from '../NavBar'
import "./Header.css"

export default function Header() {
  return (
    <div>
      <div className='header'>
        {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2acFnflk4pzCxxWCUszXLSjIkTweXCKTxw&usqp=CAU' alt='Covid-19'/> */}
        <h1> COVID19</h1>
        <h3> Covid19 Statistics</h3>
        <p>A website to provide you with all the updates on Covid-19 statistics around the world</p>
      </div>
      <NavBar />
    </div>
  )
}
