import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Updatebike({ insuranceId }) {
  const [formData, setFormData] = useState({
    provider: '',
    idv: '',
    perks: '',
    price:'',
    details:''
  });

  useEffect(() => {
    // Fetch the current car insurance data when the component mounts
    axios.get(`http://localhost:8080/bikeupdate/${insuranceId}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car insurance data:', error);
      });
  }, [insuranceId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/carinsurance/${insuranceId}`, formData);
      alert('Car insurance record updated successfully');
    } catch (error) {
      console.error('Error updating car insurance record: ', error);
    }
  };

  return (
    <div>
      <h2>Update Car Insurance Record</h2>
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
         update
        </button>
      </form>
    </div>
  );
}

export default Updatebike;
