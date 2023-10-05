import React from 'react'
import "./banner.css"

import Carousel from 'react-bootstrap/Carousel';
import icon1 from "../assets/icon1 (1).png"
import icon2 from "../assets/icon1 (2).png"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  // const navigate=useNavigate()
  return (
    <div style={{marginLeft:"200px",marginRight:"200px",display:"flex",justifyContent:"space-between" }}>
      {/* <button onClick={()=>navigate('/login')}></button> */}
     <article style={{fontSize:"40px",marginTop:"80px",}}>
     Let's find you <br/>
the <strong> Best Insurance</strong>
<div style={{fontSize:"17px",display:"flex",paddingTop:"25px"}}>
<p style={{color:"blue", display:"flex"}}>
 <div> <img src={icon1} alt="" /></div>
  <div style={{paddingTop:"2px"}}><span>  50+ insurers with one </span> <br />
  <span >of the best prices</span></div>
  </p>

<p style={{paddingLeft:"60px",color:"orange",display:"flex"}} >
<div><img src={icon2} alt="" /></div>
  <div style={{paddingTop:"5px"}}><span >Quick, easy & </span> <br />
<span>hassle free</span></div>
   </p>

</div>
     </article>

     <Carousel>
      <Carousel.Item>
      <img src={image1} alt="hlo"  />
        <Carousel.Caption>    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt="hlo"  />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt="hlo" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

         

    </div>
  )
}

export default Banner