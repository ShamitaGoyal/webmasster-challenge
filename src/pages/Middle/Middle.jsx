import React from 'react'
import './middle.css'
import Photos from '../../components/Three-Photos/Photos'

export default function Middle() {
  return (
    <section className="middle-section">
    <div className="words-section">
        <h1 className='title-para'>Sed volutpat, risus id ultricies blandit, arcu elit consectetur tellus, laoreet ornare purus nulla in ipsum ac augue vitae turpis.</h1>
        <p className='para'>Mauris vel nisl ante. Vivamus sagittis ullamcorper quam, 
            sit amet tincidunt enim sollicitudin ut. Vestibulum at 
            elementum leo. Aliquam erat volutpat. Nullam magna orci, 
            accumsan at arcu lobortis, volutpat cursus nisl. Suspendisse
            metus purus, gravida vehicula eros in, malesuada posuere magna.</p>
    </div>
    <Photos></Photos>
  </section>

  )
}
