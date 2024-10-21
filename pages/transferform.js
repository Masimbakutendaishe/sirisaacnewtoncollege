import Image from 'next/image';
import { useState } from 'react';

const TransferForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    currentSchool: '',
    grade: '',
    dob: '',
    gender: '',
    transferReason: '',
    additionalInfo: '',
    documents: {
      birthCertificate: null,
      reportCard: null,
      otherDocuments: null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, docType) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [docType]: e.target.files[0],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Transfer form submitted:', formData);
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
        <form onSubmit={handleSubmit} className="bg-blue-900 text-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Fill Out the Form to Transfer to Our College!</h2>

          {/* Input Fields */}
          {['name', 'email', 'phone', 'address', 'currentSchool', 'dob', 'gender', 'transferReason', 'additionalInfo'].map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-white" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              {field === 'address' || field === 'transferReason' || field === 'additionalInfo' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border text-black border-gray-300 rounded"
                ></textarea>
              ) : (
                <input
                  type={field === 'dob' ? 'date' : field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border text-black border-gray-300 rounded"
                />
              )}
            </div>
          ))}

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

          {/* Document Upload Section */}
          <div className="mb-4">
            <label className="block text-white">Upload Required Documents</label>

            <div className="mb-4">
              <label className="block text-white" htmlFor="birthCertificate">Birth Certificate</label>
              <input
                type="file"
                id="birthCertificate"
                onChange={(e) => handleFileChange(e, 'birthCertificate')}
                className="w-full border text-black border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="reportCard">Report Card</label>
              <input
                type="file"
                id="reportCard"
                onChange={(e) => handleFileChange(e, 'reportCard')}
                className="w-full border text-black border-gray-300 rounded p-2"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="otherDocuments">Other Documents</label>
              <input
                type="file"
                id="otherDocuments"
                onChange={(e) => handleFileChange(e, 'otherDocuments')}
                className="w-full border text-black border-gray-300 rounded p-2"
              />
            </div>

            <p className="text-gray-400 mt-2">Please upload your birth certificate and report card. Other documents are optional.</p>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-hsla(32, 91%, 18%, 0.945) text-blue-900 bg-white py-2 rounded-lg transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white hover:text-hsla(32, 91%, 18%, 0.945) hover:border hover:border-hsla(32, 91%, 18%, 0.945)"
          >
            Submit Transfer Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
