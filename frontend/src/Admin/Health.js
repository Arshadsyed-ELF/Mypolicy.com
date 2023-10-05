import React, { useEffect, useState } from 'react'
import Anav from './Anav'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './bike.css'; 
import { FaEdit, FaTrash } from 'react-icons/fa';



const Health = () => {
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
    const navigate =useNavigate()

    useEffect(() => {
      // Fetch car insurance data from the backend when the component mounts
      axios.get('http://localhost:8080/gethealth')
        .then((response) => {
          setBikeInsuranceData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching car insurance data:', error);
        });
    }, []);

   
    // const handleDelete = async (insuranceId) => {
    //   try {
    //     await axios.delete(`http://localhost:8080/bikedelete/${insuranceId}`);
    //     // Remove the deleted record from the state
    //     alert('deleted')
    //   } catch (error) {
    //     console.error('Error deleting car insurance record: ', error);
    //   }
    // };

    const deleteData = (taskId) => {
      axios.delete(`http://localhost:8080/lifedelete/${taskId}`);
      window.location.assign('/life');
      alert('deleted');
    };

  return (
    <div 
    style={{backgroundColor:"#F8F9FA", height:'700px'}}>
        <Anav/>
        <div className="flex justify-end pt-2 pr-7">
  <Button onClick={() => navigate('/addhealth')}>Add Insurance</Button>
</div> 
<br/>

<div className="container mx-auto mt-8">
      {bikeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <div>
         <p>Provider</p> 
         <h2 style={{color:"darkblue",marginRight:"200px"}}> {insurance.provider}</h2>
        </div>
        <div>
        <p style={{marginRight:"200px"}}> CoverAmount</p> <h2>{insurance.cover}</h2>
        </div>
        <div>
          <p style={{marginRight:"200px"}} >Validity</p><h2>{insurance.validity}</h2>
          </div>
          <div>
          <p style={{marginRight:"200px"}} >Hospitals</p><h2>{insurance.hospitals}</h2>
          </div>
          <button onClick={() => deleteData(insurance._id)} style={{ border: 'none', background: 'none',color:"red",paddingBottom:"55px" }}>
          <FaTrash />
                </button>

          </div>
          

          <Button id='btn' className='ml-auto'>₹ {insurance.price}  →  </Button>

       <div style={{display:'flex'}}>
       <Button id='pol'>plan details</Button>
          <p style={{background:"lightgreen",color:"black",marginLeft:"50px",marginTop:"8px"}}>{insurance.perks}</p>
          </div>
          {/* <Button onClick={handleDelete} id='pol'>delete</Button>
          <Button onClick={handleDelete} id='pol'>Update</Button> */}
        </div>
        
      ))}
      
    </div>
        </div>
  )
}

export default Health


