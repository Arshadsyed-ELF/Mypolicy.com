import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <section id='about'  style={{color:"rgb(36,38,43)"}}>
       
        <footer class="footer" >
		<div style={{display:"flex",justifyContent:"space-between",}}>
  	 <div class="container"  >
  	 	<div class="row">
  	 		
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">About</a></li>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Policies</a></li>
  	 				<li><a href="#">complaints</a></li>
  	 				<li><a href="#"></a></li>
  	 				<li><a href="#">payment's</a></li>
  	 			</ul>
  	 		</div>
               <div class="footer-col">
  	 			<h4>Life Insurance</h4>
  	 			<ul>
                   <li><a href="#">Life Insurance</a></li>
  	 				<li><a href="#">Term Insurance</a></li>
  	 				<li><a href="#">Term Insurance Calculator</a></li>
  	 				<li><a href="#">Term Return of Premium</a></li>
  	 				<li><a href="#">Spouse Term Plan</a></li>
  	 			</ul>
  	 		</div>
            <div class="footer-col">
  	 			<h4>General Insurance</h4>
  	 			<ul>
  	 				<li><a href="#">Car Insurance</a></li>
  	 				<li><a href="#"> Bike Insurance</a></li>
  	 				<li><a href="#">Motor Insurance</a></li>
  	 				<li><a href="#">Third Party Car Insurance</a></li>
  	 				<li><a href="#">Travel Insurance</a></li>
  	 				<li><a href="#">Commercial Vehicle Insurance</a></li>
  	 			</ul>
  	 		</div>
  	 		{/* <div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div> */}
  	 	</div>
  	 	</div>
  	 	
  	 </div> <br /> <br />

  <p style={{color:"gray",marginLeft:"200px",marginRight:"200px"}} >*Standard Plans Terms and Conditions apply <br />

+For insurance plans that do not require inspection of your car <br />

#The above returns are based on the past performance of 7 years <br />

*As per Draft Notification No. RT-11036/194/2021-MVL Govt. of India, Ministry of Road Transport and Highways <br />

 On availing the one-time option to exit, the total base premium is returned by the Insurer excluding.</p>
      <p style={{color:"darkgray",marginLeft:"200px",marginRight:"200px"}}>© cms - 2023. All rights reserved. Developed By Syed Arshad</p>
  </footer>

        </section>
    </div>
  )
}

export default Footer