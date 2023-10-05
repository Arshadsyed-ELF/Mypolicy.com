import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addlife() {
  const [formData, setFormData] = useState({
    provider:'',
    coveragetill:'',
    onsurvival:'',
    ondeath:'',
    perks: '',
    details: '',
    price:'',
  });

const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/life', formData);
      alert('life insurance added successfully');
      navigate('/life')
    } catch (error) {
      console.error('Error adding car insurance: ', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add Life Insurance</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-600">Policyprovider</label>
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
          <label className="block text-gray-600">Coverage Till</label>
          <input
            type="text"
            name="coveragetill"
            value={formData.coveragetill}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">On Survival</label>
          <input
            type="text"
            name="onsurvival"
            value={formData.onsurvival}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">On Death</label>
          <input
            type="text"
            name="ondeath"
            value={formData.ondeath}
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

export default Addlife;
