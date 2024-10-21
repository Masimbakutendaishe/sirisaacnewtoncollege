import Image from 'next/image';
import { useState } from 'react';
import { createClient } from 'contentful-management';

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
    birthCertificate: null,
    reportCard: null,
    otherDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    // Update only the file input while preserving other fields
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a Contentful client
    const client = createClient({
   
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });

    try {
      // Create an entry in Contentful
      const space = await client.getSpace('54xsg464qja8');
      const environment = await space.getEnvironment('master'); // or your environment name
      const entry = await environment.createEntry('admissionsForm', {
        fields: {
          name: { 'en-US': formData.name },
          email: { 'en-US': formData.email },
          phone: { 'en-US': formData.phone },
          address: { 'en-US': formData.address },
          grade: { 'en-US': formData.grade },
          dateOfBirth: { 'en-US': formData.dob },
          gender: { 'en-US': formData.gender },
          previousSchool: { 'en-US': formData.previousSchool },
          additionalInformation: { 'en-US': formData.additionalInfo }, // Correct field name
        },
      });

      // Process and upload files if needed
      if (formData.birthCertificate) {
        const birthCertFile = await uploadFile(environment, formData.birthCertificate);
        entry.fields.birthCertificate = { 'en-US': { sys: { type: 'File', id: birthCertFile.sys.id } } };
      }

      if (formData.reportCard) {
        const reportCardFile = await uploadFile(environment, formData.reportCard);
        entry.fields.reportCard = { 'en-US': { sys: { type: 'File', id: reportCardFile.sys.id } } };
      }

      if (formData.otherDocuments) {
        const otherDocumentsFile = await uploadFile(environment, formData.otherDocuments);
        entry.fields.otherDocuments = { 'en-US': { sys: { type: 'File', id: otherDocumentsFile.sys.id } } };
      }

      // Publish the entry
      await entry.publish();
      console.log('Form submitted:', entry);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  const uploadFile = async (environment, file) => {
    const upload = await environment.createUpload({
      file: file,
    });

    await upload.processForAllLocales();
    const asset = await environment.createAsset({
      fields: {
        title: { 'en-US': file.name },
        file: {
          'en-US': {
            contentType: file.type,
            fileName: file.name,
            upload: { sys: { type: 'Link', id: upload.sys.id } },
          },
        },
      },
    });

    await asset.processForAllLocales();
    await asset.publish();
    return asset;
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
        <form onSubmit={handleSubmit} className="bg-blue-900 text-white rounded-lg shadow-lg p-6">
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

          {/* Document Upload Section */}
          <div className="mb-4">
            <label className="block text-white" htmlFor="birthCertificate">Upload Birth Certificate</label>
            <input
              type="file"
              id="birthCertificate"
              name="birthCertificate"
              onChange={handleFileChange}
              className="w-full border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="reportCard">Upload Report Card</label>
            <input
              type="file"
              id="reportCard"
              name="reportCard"
              onChange={handleFileChange}
              className="w-full border text-black border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white" htmlFor="otherDocuments">Upload Other Documents</label>
            <input
              type="file"
              id="otherDocuments"
              name="otherDocuments"
              onChange={handleFileChange}
              className="w-full border text-black border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdmissionsForm;
