import React from 'react'
import park from './parkdata'
import './parks.css'
import MyAccordion from '../Accordion/MyAccordion'

function Parks() {
  return (
    <>
    <div className="parks-wrapper">
        <div className='parks-data'>
        {park.map(({ name, description }, index) => (
            <div key={index}>
            <h2>{name}</h2>
            <p>{description}</p>
            </div>
        ))}

        </div>
    </div>

    <MyAccordion items={park} />
    </>
  )
}

export default Parks