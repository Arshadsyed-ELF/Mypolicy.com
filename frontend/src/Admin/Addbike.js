import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addbike() {
  const [formData, setFormData] = useState({
    provider:'',
    idv: '',
    perks: '',
    details: '',
    price:'',
    claim:''
  });

const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/bike', formData);
      alert('bike insurance added successfully');
      navigate('/bike')
    } catch (error) {
      console.error('Error adding car insurance: ', error);
    }
  };

//   const handlePhoto = (e) => {
//     setFormData({...formData, provider: e.target.files[0]});
// }
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Bike Insurance</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-600">Policyprovider</label>
          {/* <input
            type="file"
            name="provider"
            accept=' accept=".png, .jpg, .jpeg"'
            value={formData.provider}
            onChange={handlePhoto}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          /> */}

          <input
            type="text"
            name="provider"
            value={formData.provider}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Insured Value(IDV)</label>
          <input
            type="text"
            name="idv"
            value={formData.idv}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Addons</label>
          <input
            type="text"
            name="perks"
            value={formData.perks}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Claims settled</label>
          <input
            type="text"
            name="claim"
            value={formData.claim}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Policy Details</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
   
    </div>
  );
}

export default Addbike;
