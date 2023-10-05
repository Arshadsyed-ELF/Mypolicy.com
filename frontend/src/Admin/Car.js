// import React, { useEffect, useState } from 'react'
// import Anav from './Anav'
// import { useNavigate } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
// import axios from 'axios'



// const Car = () => {
//   const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
//     const navigate =useNavigate()

//     useEffect(() => {
//       // Fetch car insurance data from the backend when the component mounts
//       axios.get('http://localhost:8080/getcar')
//         .then((response) => {
//           setBikeInsuranceData(response.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching car insurance data:', error);
//         });
//     }, []);

   
//     const handleDelete = async (insuranceId) => {
//       try {
//         await axios.delete(`http://localhost:8080/bikedelete/${insuranceId}`);
//         // Remove the deleted record from the state
//         setBikeInsuranceData((prevData) => prevData.filter((insurance) => insurance._id !== insuranceId));
//         alert('deleted')
//       } catch (error) {
//         console.error('Error deleting car insurance record: ', error);
//       }
//     };

//   return (
//     <div>
//         <Anav/>
//         <Button onClick={()=>navigate('/addcar')}>Add inusrance</Button>

//         <div className="max-w-3xl mx-auto mt-8 p-4">
//       <h2 className="text-2xl font-semibold mb-4">Bike Insurance Records</h2>
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2 bg-gray-200">Provider</th>
//             <th className="px-4 py-2 bg-gray-200">idv</th>
//             <th className="px-4 py-2 bg-gray-200">perks</th>
//             <th className="px-4 py-2 bg-gray-200">price</th>
//             <th className="px-4 py-2 bg-gray-200">Policy Details</th>
//             <th className="px-4 py-2 bg-gray-200">Operations</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bikeInsuranceData.map((insurance, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">{insurance.provider}</td>
//               <td className="border px-4 py-2">{insurance.idv}</td>
//               <td className="border px-4 py-2">{insurance.perks}</td>
//               <td className="border px-4 py-2">{insurance.price}</td>
//               <td className="border px-4 py-2">{insurance.details}</td>
//               <td className="border px-4 py-2">
//               <button onClick={() => handleDelete(insurance._id)}>Update</button>
//               <button onClick={() => handleDelete(insurance._id)}>Delete</button>
//     </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
        

//         </div>
//   )
// }

// export default Car

import React, { useEffect, useState } from 'react'
import Anav from './Anav'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import './bike.css'; 
import { FaEdit, FaTrash } from 'react-icons/fa';




const Car = () => {
  const [bikeInsuranceData, setBikeInsuranceData] = useState([]);
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
  <Button onClick={() => navigate('/addcar')}>Add Insurance</Button>
</div> 
<br/>

<div className="container mx-auto mt-8">
      {bikeInsuranceData.map((insurance, index) => (
        <div key={index} className="card">
         <div id='div1'>
         <h2 style={{color:"darkblue",marginRight:"300px"}}>{insurance.provider}</h2>
        
        <div>
        <p style={{marginRight:"300px"}}> IDV</p> <h2>{insurance.idv}</h2>
        </div>
        <div>
          <p style={{marginRight:"200px"}} >Claims settled</p><h2>{insurance.claim}</h2>
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

export default Car





