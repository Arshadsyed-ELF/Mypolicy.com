import React from 'react'
import Unav from './Unav'
import Banner from '../Components/Banner'
import Partners from '../Components/Partners'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

import life from "../assets/life.png"
import health from "../assets/health (1).png"
import car from "../assets/car.png"
import bike from "../assets/bike.png"

const Uhome = () => {
  return (
    <div>
        <Unav/>
       {/* <div style={{backgroundColor:"#F8F9FA"}}> */}
       <Banner />
       {/* <Partners/> */}
       {/* </div> */}
        <br/>
        <br/>
        <br/>

        <div style={{backgroundColor:"white",display:"flex",justifyContent:"space-around",paddingTop:"50px",paddingBottom:"50px"}}>
        <Link to='/ulife'><img src={life} alt='' /></Link>
            <Link to='/uhealth'><img src={health} alt='' /></Link>
       <Link to='/ucar'> <img src={car} alt='' /></Link>
       <Link to='/ubike'><img src={bike} alt='' /></Link>
        
        </div>
   
        <Footer/>
    </div>
  )
}

export default Uhome