import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { FaTrash,FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Anav from './Anav';

const Users = () => {
  const [lifeInsuranceData, setLifeInsuranceData] = useState([]);
  const [healthInsuranceData, setHealthInsuranceData] = useState([]);
  const [carInsuranceData, setCarInsuranceData] = useState([]);
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
  const [users, setUsers] = useState([]);

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

   useEffect(() => {
    axios.get(`http://localhost:8080/getusers`)
      .then((response) => {
        setUsers(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        // setError('Failed to fetch projects.');
        // setLoading(false);
      });
}, []);

const deleteData = (taskId) => {
    axios.delete(`http://localhost:8080/userdelete/${taskId}`);
    window.location.assign('/users');
    alert('User is deleted');
  };
  const deletecar = (taskId) => {
    axios.delete(`http://localhost:8080/usercardelete/${taskId}`);
    window.location.assign('/users');
    alert('deleted');
  };
  const deletelife = (taskId) => {
    axios.delete(`http://localhost:8080/userlifedelete/${taskId}`);
    window.location.assign('/users');
    alert('deleted');
  };
  const deletehealth = (taskId) => {
    axios.delete(`http://localhost:8080/userhealthdelete/${taskId}`);
    window.location.assign('/users');
    alert('deleted');
  };
  const deletebike = (taskId) => {
    axios.delete(`http://localhost:8080/userbikedelete/${taskId}`);
    window.location.assign('/users');
    alert('deleted');
  };

 
  
  const fetchUserBikeData = (userId) => {
    axios.get(`http://localhost:8080/getuserlife/${userId}`)
    .then((response) => {
      setLifeInsuranceData(response.data);
      toggleDetails(); // Show Plan Details when data is fetched
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
    });
    axios.get(`http://localhost:8080/getuserhealth/${userId}`)
    .then((response) => {
      setHealthInsuranceData(response.data);
      toggleDetails(); // Show Plan Details when data is fetched
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
    });
    axios.get(`http://localhost:8080/getusercar/${userId}`)
    .then((response) => {
      setCarInsuranceData(response.data);
      toggleDetails(); // Show Plan Details when data is fetched
    })
    .catch((error) => {
      console.error('Error fetching user bike data:', error);
    });
    axios .get(`http://localhost:8080/getuserbike/${userId}`)
      .then((response) => {
        setBikeInsuranceData(response.data);
        toggleDetails(); // Show Plan Details when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching user bike data:', error);
      });
  };

  return (
    <div style={{backgroundColor:"",height:"707px"}}>
       <Anav/>
       <br/>
      <h1  className='text-center'>Users</h1> <br/>
      <Table striped bordered hover variant="dark" style={{ marginLeft: '250px', width: '900px', }}>
        <thead>
          <tr>
            <th>sl/no</th>
            <th>UserId</th>
            <th>User name</th>
            <th>Email</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
              <button style={{border:"none",background:"none",marginRight:"30px"}} ><Link to={`/useredit/${item._id}`} style={{color:"blue",textDecoration:"none",}}><FaEdit/></Link></button> 
                <button onClick={() => deleteData(item._id)} style={{ border: 'none',color:"red",}}>
                  <FaTrash/>
                </button>{' '}
                
                <Button onClick={() => fetchUserBikeData(item._id)} style={{marginLeft:"30px"}}>view</Button>
                
                <div style={{display:'flex'}}>
              
      {showDetails && (
        
      <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
      <div className="bg-white p-4 rounded-lg z-10 relative" style={{ maxHeight: "80vh", overflowY: "scroll" }}>
        {/* Rest of your content */}
        <p className="text-sm text-gray-600">
          <div className="container mx-auto mt-8">
          <h1 className='text-center text-blue-300' >Life Insurances</h1>
      {lifeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <div style={{paddingLeft:"20px"}}>
        <p > Provider</p> <h2 style={{color:"orange"}}>{insurance.provider}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Policy Number</p><h2>{insurance._id.slice(5,15)}</h2>
          </div>
        <div style={{paddingLeft:"20px"}}>
        <p > Name</p> <h2>{insurance.name}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Email</p><h2>{insurance.email}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Phone Number</p><h2>{insurance.phoneNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Bike No</p><h2>{insurance.bikeNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Amount Paid</p><h2>{insurance.totalamount}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Registration Date</p><h2>{insurance.registrationDate}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Expiry on</p><h2>{insurance.validtill}</h2>
          </div>
          <button onClick={() => deletelife(insurance._id)} style={{ border: 'none', background: 'none',color:"red",paddingBottom:"55px" }}>
          <FaTrash />
           </button>
          </div>
     <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetail}>
        Plan Details
      </Button>
      {showDetail && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details} In {insurance.perks} can be done.</p>
      

            <Button onClick={toggleDetail} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>

        <div style={{display:'flex'}}>
                 </div>
        </div>
      ))}
          </div>
          <h1 className='text-center text-blue-300'>Health Insurances</h1>
      {healthInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <div style={{paddingLeft:"20px"}}>
        <p > Provider</p> <h2 style={{color:"orange"}}>{insurance.provider}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Policy Number</p><h2>{insurance._id.slice(5,15)}</h2>
          </div>
        <div style={{paddingLeft:"20px"}}>
        <p > Name</p> <h2>{insurance.name}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Email</p><h2>{insurance.email}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Phone Number</p><h2>{insurance.phoneNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Bike No</p><h2>{insurance.bikeNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Amount Paid</p><h2>{insurance.totalamount}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Registration Date</p><h2>{insurance.registrationDate}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Expiry on</p><h2>{insurance.validtill}</h2>
          </div>
          <button onClick={() => deletehealth(insurance._id)} style={{ border: 'none', background: 'none',color:"red",paddingBottom:"55px" }}>
          <FaTrash />
           </button>
          </div>
     <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetail}>
        Plan Details
      </Button>
      {showDetail && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details} In {insurance.perks} can be done.</p>
      

            <Button onClick={toggleDetail} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>

        <div style={{display:'flex'}}>
                 </div>
        </div>
      ))}
        <h1 className='text-center text-blue-300'>Car Insurances</h1>
      {carInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <div style={{paddingLeft:"20px"}}>
        <p > Provider</p> <h2 style={{color:"orange"}}>{insurance.provider}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Policy Number</p><h2>{insurance._id.slice(5,15)}</h2>
          </div>
        <div style={{paddingLeft:"20px"}}>
        <p > Name</p> <h2>{insurance.name}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Email</p><h2>{insurance.email}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Phone Number</p><h2>{insurance.phoneNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Bike No</p><h2>{insurance.bikeNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Amount Paid</p><h2>{insurance.totalamount}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Registration Date</p><h2>{insurance.registrationDate}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Expiry on</p><h2>{insurance.validtill}</h2>
          </div>
          <button onClick={() => deletecar(insurance._id)} style={{ border: 'none', background: 'none',color:"red",paddingBottom:"55px" }}>
          <FaTrash />
           </button>
          </div>
     <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetail}>
        Plan Details
      </Button>
      {showDetail && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details} In {insurance.perks} can be done.</p>
      

            <Button onClick={toggleDetail} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>

        <div style={{display:'flex'}}>
                 </div>
        </div>
      ))}
        <h1 className='text-center text-blue-300'>Bike Insurances</h1>
      {bikeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <div style={{paddingLeft:"20px"}}>
        <p > Provider</p> <h2 style={{color:"orange"}}>{insurance.provider}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Policy Number</p><h2>{insurance._id.slice(5,15)}</h2>
          </div>
        <div style={{paddingLeft:"20px"}}>
        <p > Name</p> <h2>{insurance.name}</h2>
        </div>
        <div style={{paddingLeft:"20px"}}>
          <p>Email</p><h2>{insurance.email}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Phone Number</p><h2>{insurance.phoneNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Bike No</p><h2>{insurance.bikeNo}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Amount Paid</p><h2>{insurance.totalamount}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Registration Date</p><h2>{insurance.registrationDate}</h2>
          </div>
          <div style={{paddingLeft:"20px"}}>
          <p>Expiry on</p><h2>{insurance.validtill}</h2>
          </div>
          <button onClick={() => deletebike(insurance._id)} style={{ border: 'none', background: 'none',color:"red",paddingBottom:"55px" }}>
          <FaTrash />
           </button>
          </div>
     <div style={{display:'flex'}}>
        <Button id='pol' onClick={toggleDetail}>
        Plan Details
      </Button>
      {showDetail && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-white p-4 rounded-lg z-10 relative">
            <p className="text-sm text-gray-600">{insurance.details} In {insurance.perks} can be done.</p>
      

            <Button onClick={toggleDetail} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>

        <div style={{display:'flex'}}>
                 </div>
        </div>
      ))}
          
         
            </p>
            <Button onClick={toggleDetails} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}
     </div>
     
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    
    </div>
  )
}

export default Users

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table } from 'react-bootstrap';
// import { FaTrash, FaEdit } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Anav from './Anav';

// const Users = () => {
//   const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
//   const [users, setUsers] = useState([]);

//   const [showDetails, setShowDetails] = useState(false);

//   const toggleDetails = () => {
//     setShowDetails(!showDetails);
//   };

//   const [showDetail, setShowDetail] = useState(false);

//   const toggleDetail = () => {
//     setShowDetail(!showDetail);
//   };

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/getusers`)
//       .then((response) => {
//         setUsers(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   const deleteData = (userId) => {
//     axios.delete(`http://localhost:8080/userdelete/${userId}`);
//     window.location.assign('/users');
//     alert('User is deleted');
//   };

//   const fetchUserBikeData = (userId) => {
//     axios
//       .get(`http://localhost:8080/getuserbike/${userId}`)
//       .then((response) => {
//         setBikeInsuranceData(response.data);
//         toggleDetails(); // Show Plan Details when data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching user bike data:', error);
//       });
//   };

//   return (
//     <div style={{ backgroundColor: '', height: '707px' }}>
//       <Anav />
//       <br />
//       <h1 className='text-center'>Users</h1> <br />
//       <Table striped bordered hover variant='dark' style={{ marginLeft: '250px', width: '1200px' }}>
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
//           {users.map((user, index) => (
//             <tr key={user._id}>
//               <td>{index + 1}</td>
//               <td>{user._id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>
//                 <button style={{ border: 'none', background: 'none', paddingRight: '10px' }}>
//                   <Link to={`/useredit/${user._id}`} style={{ color: 'blue', textDecoration: 'none' }}>
//                     <FaEdit />
//                   </Link>
//                 </button>
//                 <button onClick={() => deleteData(user._id)} style={{ border: 'none', color: 'red' }}>
//                   <FaTrash />
//                 </button>{' '}
//                 <div style={{ display: 'flex' }}>
//                   <Button onClick={() => fetchUserBikeData(user._id)}>Plan Details</Button>
//                   {showDetails && (
//                     <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
//                       <div className='bg-gray-900 bg-opacity-50 absolute inset-0'></div>
//                       <div className='bg-white p-4 rounded-lg z-10 relative'>
//                         <div className='container mx-auto mt-8'>
//                           {bikeInsuranceData.map((insurance, index) => (
//                             <div key={index} className='card'>
//                               <div id='div1'>
//                                 <div>
//                                   <p> Provider</p> <h2 style={{ color: 'orange' }}>{insurance.provider}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Policy Number</p>
//                                   <h2>{insurance._id.slice(5, 15)}</h2>
//                                 </div>
//                                 <div>
//                                   <p> Name</p> <h2>{insurance.name}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Email</p>
//                                   <h2>{insurance.email}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Phone Number</p>
//                                   <h2>{insurance.phoneNo}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Bike No</p>
//                                   <h2>{insurance.bikeNo}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Amount Paid</p>
//                                   <h2>{insurance.totalamount}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Registration Date</p>
//                                   <h2>{insurance.registrationDate}</h2>
//                                 </div>
//                                 <div>
//                                   <p>Expiry on</p>
//                                   <h2>{insurance.validtill}</h2>
//                                 </div>
//                               </div>
//                               <div style={{ display: 'flex' }}>
//                                 <Button onClick={toggleDetail}>Plan Details</Button>
//                                 {showDetail && (
//                                   <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50'>
//                                     <div className='bg-gray-900 bg-opacity-50 absolute inset-0'></div>
//                                     <div className='bg-white p-4 rounded-lg z-10 relative'>
//                                       <p className='text-sm text-gray-600'>{insurance.details} In {insurance.perks} can be done.</p>

//                                       <Button onClick={toggleDetail} className='mt-4'>
//                                         Close
//                                       </Button>
//                                     </div>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default Users;
