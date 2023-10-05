// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Table } from 'react-bootstrap';
// import { FaTrash,FaEdit } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Anav from './Anav';

// const Abike = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/getusers`)
//       .then((response) => {
//         setUsers(response.data);
//         // setLoading(false);
//       })
//       .catch((error) => {
//         // setError('Failed to fetch projects.');
//         // setLoading(false);
//       });
// }, []);

// const deleteData = (taskId) => {
//     axios.delete(`http://localhost:8080/userdelete/${taskId}`);
//     window.location.assign('/users');
//     alert('User is deleted');
//   };
//   return (
//     <div style={{backgroundColor:"",height:"707px"}}>
//        <Anav/>
//        <br/>
//       <h1  className='text-center'>Users</h1> <br/>
//       <Table striped bordered hover variant="dark" style={{ marginLeft: '250px', width: '1200px', }}>
//         <thead>
//           <tr>
//             <th>sl/no</th>
//             <th>UserId</th>
//             <th>User name</th>
//             <th>Email</th>
//             <th>Operation</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((item, index) => (
//             <tr key={item._id}>
//               <td>{index + 1}</td>
//               <td>{item._id}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>
//               <button style={{border:"none",background:"none",paddingRight:"10px"}} ><Link to={`/useredit/${item._id}`} style={{color:"blue",textDecoration:"none",}}><FaEdit/></Link></button> 
//                 <button onClick={() => deleteData(item._id)} style={{ border: 'none',color:"red" }}>
//                   <FaTrash/>
//                 </button>{' '}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
    
//     </div>
//   )
// }

// export default Abike

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import Unav from '../Unav'

import './bike.css'
// import 
import Anav from './Anav'




const Abike = () => {
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
  const [users, setUsers] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
    const navigate =useNavigate()

    // useEffect(() => {
    //   // Fetch car insurance data from the backend when the component mounts
    //   axios.get('http://localhost:8080/getuserbike')
    //     .then((response) => {
    //       setBikeInsuranceData(response.data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching car insurance data:', error);
    //     });
    // }, []);

    useEffect(() => {
      // Fetch user data from the backend and store it in the 'users' state
      axios.get(`http://localhost:8080/users`)
        .then((response) => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('Error fetching users: ', error);
        });
  
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        axios.get(`http://localhost:8080/api/tasks/${user.id}`)
          .then((response) => {
            const taskData = response.data;
        setBikeInsuranceData(taskData);

          })
          .catch(error => {
            console.error('Error fetching tasks: ', error);
          });
      } else {
        console.log("ERROR")
      }
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
    <div id='hlo' >
      
      <Anav/>
      <br/>
      
    
      <h1 className='text-center  text-blue-800'>MY Bike Insurances</h1>   <br/>
        <div className="flex justify-end pt-2 pr-7">
</div>

<div className="container mx-auto mt-8">
      {bikeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         {/* <h2 style={{color:"darkblue",marginRight:"300px"}}>{insurance.provider}</h2> */}
         <div>
        <p > Provider</p> <h2 style={{color:"orange"}}>{insurance.provider}</h2>
        </div>
        <div>
          <p>Policy Number</p><h2>{insurance._id.slice(5,15)}</h2>
          </div>
        <div>
        <p > Name</p> <h2>{insurance.name}</h2>
        </div>
        <div>
          <p>Email</p><h2>{insurance.email}</h2>
          </div>
          <div>
          <p>Phone Number</p><h2>{insurance.phoneNo}</h2>
          </div>
          <div>
          <p>Bike No</p><h2>{insurance.bikeNo}</h2>
          </div>
          <div>
          <p>Amount Paid</p><h2>{insurance.totalamount}</h2>
          </div>
          <div>
          <p>Registration Date</p><h2>{insurance.registrationDate}</h2>
          </div>
          <div>
          <p>Expiry on</p><h2>{insurance.validtill}</h2>
          </div>
          </div>
          
{/* 
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
     </div> */}
    
     <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetails}>
        Plan Details
      </Button>
      {showDetails && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details} In {insurance.perks} can be done.</p>
        {/*
        <div>
         <h2> provider:{insurance.provider}</h2>
      <h2>Name:{insurance.name}</h2>
          <h2>Email:{insurance.email}</h2>
          
          <h2>phoneNo:{insurance.phoneNo}</h2>
          
          <h2>Bike No:{insurance.bikeNo}</h2>
        
          <h2>Amount Paid{insurance.totalamount}</h2>
        
          <h2>Registerd Date:{insurance.registrationDate}</h2>
      
          <h2>Expires on:{insurance.validtill}</h2>
          </div> */}

            <Button onClick={toggleDetails} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>

        <div style={{display:'flex'}}>

                 </div>
          {/* <Button onClick={handleDelete} id='pol'>delete</Button>
          <Button onClick={handleDelete} id='pol'>Update</Button> */}
        </div>
        
      ))}
      
    </div>
        </div>
        
  )
}

export default Abike
