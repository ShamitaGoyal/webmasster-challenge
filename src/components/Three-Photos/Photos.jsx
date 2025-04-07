import React from 'react'
import img1 from './../../assets/image3.png'
import img2 from './../../assets/image4.png'
import img3 from './../../assets/image5.png'
import './photos.css'

function Photos() {
  return (
    <section>
    <div class="three-imgs">
        <img src={img1} alt="mountain2" class="image image1"/>
        <img src={img2} alt="mountain3" class="image image2"/>
        <img src={img3} alt="mountain4" class="image image3"/>
    </div>
    </section>
  )
}

export default Photos