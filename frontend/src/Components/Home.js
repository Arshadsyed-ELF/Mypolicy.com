import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Partners from './Partners'
import Footer from './Footer'
import { Link } from 'react-router-dom'

import life from "../assets/life.png"
import health from "../assets/health (1).png"
import car from "../assets/car.png"
import bike from "../assets/bike.png"

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <div style={{backgroundColor:"white",display:"flex",justifyContent:"space-around",paddingTop:"50px",paddingBottom:"50px"}}>
        <Link to='/login'><img src={life} alt='' /></Link>
            <Link to='/login'><img src={health} alt='' /></Link>
       <Link to='/login'> <img src={car} alt='' /></Link>
       <Link to='/login'><img src={bike} alt='' /></Link>
        
        </div>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home