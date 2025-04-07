import React from 'react'
import mountain1 from './../../assets/image2.png'
import './mountain.css'


function Mountain() {
  return (
    <section className="hero-section">
    <div className="img-section">
        <p className="hero-title">Lorem Ipsum</p>
        <img className="hero-mountain1" src={mountain1} alt="mountain1"/>
    </div>
  </section>

  )
}

export default Mountain