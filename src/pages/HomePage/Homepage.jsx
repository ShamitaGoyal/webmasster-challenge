import React from 'react'
import Header from '../../components/Header/Header'
import Middle from '../Middle/Middle'
import Footer from '../../components/Footer/Footer'
import Parks from './../../components/ParkData/Parks'; 
import Mountain from '../../components/Mountain/Mountain';
// import park from './../../components/ParkData/parkdata'



function Homepage() {
  return (
    <>
    <Header></Header>
    <Mountain></Mountain>
    <Middle></Middle>
    <Parks></Parks>
    <Footer></Footer>
    
    </>
  )
}

export default Homepage