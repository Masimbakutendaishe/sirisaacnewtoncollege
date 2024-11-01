import Image from 'next/image';
import { useState } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, addDoc } from 'firebase/firestore';

const AdmissionsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    dob: '',
    gender: '',
    previousSchool: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document to the "admissions" collection in Firestore
      await addDoc(collection(db, 'admissions'), formData);
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
      // Reset the form data after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        grade: '',
        dob: '',
        gender: '',
        previousSchool: '',
        additionalInfo: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting application. Please try again later.');
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/classimage.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">ADMISSIONS FORM</h1>
      </div>

      {/* Admissions Form Section */}
      <div className="max-w-4xl mx-auto p-8">
        <form onSubmit={handleSubmit} className=" text-white rounded-lg shadow-lg p-6" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
          <h2 className="text-2xl font-bold mb-4">Fill Out the Form and Get Ready To Join Our College!</h2>

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
            <label className="block text-white" htmlFor="address">Home Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="previousSchool">Previous School</label>
            <input
              type="text"
              id="previousSchool"
              name="previousSchool"
              value={formData.previousSchool}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="grade">Grade Applying For</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a grade</option>
              <option value="1">Grade 1</option>
              <option value="2">Grade 2</option>
              <option value="3">Grade 3</option>
              {/* Add more grades as needed */}
            </select>
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

          <button type="submit" className="bg-white text-blue-900 font-bold px-4 py-2 rounded">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionsForm;
