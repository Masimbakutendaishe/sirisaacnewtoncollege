import Image from 'next/image';
import { useState } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const TransferForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fromLocation: '',
    toLocation: '',
    transferDate: '',
    reason: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document to the "transfers" collection in Firestore
      await addDoc(collection(db, 'transfer'), formData);
      console.log('Form submitted:', formData);
      alert('Transfer form submitted successfully!');
      // Reset the form data after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        fromLocation: '',
        toLocation: '',
        transferDate: '',
        reason: '',
        additionalInfo: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting the transfer form. Please try again later.');
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/classimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">TRANSFER FORM</h1>
      </div>

      {/* Transfer Form Section */}
      <div className="max-w-4xl mx-auto p-8">
        <form onSubmit={handleSubmit} className="text-white rounded-lg shadow-lg p-6" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
          <h2 className="text-2xl font-bold mb-4">Please Fill Out the Transfer Form</h2>

          {/* Form Fields */}
          <div className="mb-4">
            <label className="block text-white" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="fromLocation">From Location</label>
            <input
              type="text"
              id="fromLocation"
              name="fromLocation"
              value={formData.fromLocation}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="toLocation">To Location</label>
            <input
              type="text"
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="transferDate">Transfer Date</label>
            <input
              type="date"
              id="transferDate"
              name="transferDate"
              value={formData.transferDate}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="reason">Reason for Transfer</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            ></textarea>
          </div>

          <button type="submit" className="bg-white text-blue-900 font-bold px-4 py-2 rounded">Submit Transfer Form</button>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
