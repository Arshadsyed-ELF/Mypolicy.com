import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
import '../../Admin/bike.css'
import Unav from '../Unav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'



const Ucar = () => {
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

    const navigate =useNavigate()

    useEffect(() => {
      // Fetch car insurance data from the backend when the component mounts
      axios.get('http://localhost:8080/getcar')
        .then((response) => {
          setBikeInsuranceData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching car insurance data:', error);
        });
    }, []);

   
    const handleDelete = async (insuranceId) => {
      try {
        await axios.delete(`http://localhost:8080/bikedelete/${insuranceId}`);
        // Remove the deleted record from the state
        alert('deleted')
      } catch (error) {
        console.error('Error deleting car insurance record: ', error);
      }
    };

  return (
    <div 
    style={{backgroundColor:"#F8F9FA", height:'700px'}}>
        <Unav/>
<br/>
<h2 className='text-center'>Get Car Insurance</h2>
<br/>
<div className="container mx-auto mt-8">
      {bikeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
        <div style={{marginRight:"200px"}}>
          <p >Policy Provider</p>
        <h2 style={{color:"darkblue"}}>{insurance.provider}</h2>
          </div>
        <div>
        <p style={{marginRight:"200px"}}> IDV</p> <h2>{insurance.idv}</h2>
        </div>
        <div style={{marginRight:"200px"}}>
          <p  >Claims settled</p><h2>{insurance.claim}</h2>
          </div>
          <div>
        <p style={{marginRight:"200px"}}> Validty</p> <h2>2 yrs</h2>
        </div>
          </div>
          <div className='ml-auto'>
          <Button id='btn' onClick={()=>navigate('/addcarpolicy')}>₹ {Math.floor(insurance.price / 24)}/month  → </Button>
          </div>
       <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetails}>
        Plan Details
      </Button>
      {showDetails && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details}</p>
            <Button onClick={toggleDetails} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
       
     
          <p style={{background:"lightgreen",color:"black",marginLeft:"50px",marginTop:"8px"}}>{insurance.perks}</p>
          </div>
          </div>
        
      ))}
      
    </div>
        </div>
  )
}

export default Ucar