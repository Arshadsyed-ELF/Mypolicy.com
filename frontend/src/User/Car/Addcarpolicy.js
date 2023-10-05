import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './addbikepolicy.css'
// import './df.css'

import Unav from '../Unav';


function Addcarpolicy() {
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    carNo: '',
    totalamount: '',
    provider:'',
  });

  useEffect(() => {
    // Fetch bike insurance data from the backend when the component mounts
    axios.get('http://localhost:8080/getbike')
      .then((response) => {
        setBikeInsuranceData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bike insurance data:', error);
      });
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update formData with user input
      const updatedFormData = { ...formData };
      
      // Calculate the total amount including GST
      const selectedInsurance = bikeInsuranceData[0]; // Assuming you're using the first item in the array
      const provider=selectedInsurance.provider;
      const details=selectedInsurance.details;
      const perks=selectedInsurance.perks;
    //   const details=selectedInsurance.details;
      const price = selectedInsurance.price;
    //   console.log(price)
    //   const gst = price / 5 + +price; // Calculate GST (8%)
      const totalAmount = price /100 *5  + +price; // Calculate the total amount
  
      // Update formData with the total amount
      updatedFormData.totalamount = totalAmount;
      updatedFormData.provider=provider
      updatedFormData.details=details
      updatedFormData.perks=perks
      
  
      // Now you can post the updatedFormData
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
      updatedFormData.userId=userId
      updatedFormData.userName=userName
      
      await axios.post('http://localhost:8080/usercar', updatedFormData);
      console.log(updatedFormData);
      alert('Car insurance added successfully');
      navigate('/carinsurance');
    } catch (error) {
      console.error('Error adding bike insurance: ', error);
    }
  };
  

  return (
    <div  style={{backgroundColor:"#F8F9FA",}}>
        <Unav/>
     <div style={{ display: 'flex ' }} >
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg bg-white">
          <h2 className="text-2xl font-semibold" >Your car is almost insured! </h2>
          <p>We just need a few more details before payment</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              {/* <label className="block text-gray-600">Bike Number</label> */}
              <input
                type="text"
                name="carNo"
                placeholder='Car Number'
                value={formData.carNo}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>

 
            <div className="mb-4 ">
              {/* <label className="block text-gray-600">Your Name</label> */}
              <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className="border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-600">Mobile Number</label> */}
              <input
                type="text"
                name="phoneNo"
                placeholder='Mobile Number'
                value={formData.phoneNo}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-600">Email Address</label> */}
              <input
                type="text"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {bikeInsuranceData.map((item, index) => (
              <div key={index}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Net premium </p>
                  <p>₹{item.price}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>GST </p>
                  <p>₹{item.price/100 * 5}</p>
                </div>
                <div style={{borderBottom:"2px solid black"}}></div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <p>Total Amount</p>
                  <p>₹ {item.price /100 *5  + +item.price}</p>
                </div>
                <div className='d-flex'>
                  <input type='checkbox' />
                  <p className='mt-3 pl-3'>I agree to the terms & conditions </p>
                </div>
              </div>
            ))}
            <button
              type="submit"
              style={{ width: "340px" }}
              className="bg-blue-400 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Pay now
            </button>
          </form>
        </div>
      </div> 
      <div> <br/>
        <p id='footer'>Disclaimer:
        *Savings are based on the comparison between the highest and the lowest premium for own damage cover (excluding add-on covers) provided by different insurance companies for the same vehicle with the same IDV and same NCB.

*₹1.5 is the Comprehensive premium for a 2015 TVS XL Super 70cc, MH02(Mumbai) RTO with an IDV of Rs.5,895 and NCB at 50%.
For more details on risk factors, terms and conditions, please read the sales brochure carefully before concluding a sale. Actual time for transaction may vary subject to additional data requirements and operational processes.

+All savings are provided by insurers as per IRDAI approved insurance plans.STANDARD TERMS AND CONDITIONS APPLY. Policybazaar Insurance Brokers Private Limited,

Registered Office - Plot No.119, Sector - 44, Gurgaon, Haryana - 122001 | CIN: U74999HR2014PTC053454|Registration No. 742, Valid till 09/06/2024 | License category- Direct Broker (Life & General)

Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers.
<br/>
<p className='copyright'>© Copyright 2008-2023 policybazaar.com. All Rights Reserved.</p>
</p>
        
      </div>
    </div>
  );
}

export default  Addcarpolicy