import Link from 'next/link';

const HowToApply = () => {
  return (
    <div className="bg-blue-100 p-8">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">How to Apply</h1>
      </div>

      {/* Introduction Section */}
      <div className="text-center mb-8">
        <p className="text-lg text-gray-700 mt-4">
          Follow these steps to successfully apply to our school.
        </p>
      </div>

      {/* Requirements Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-hsla(210, 100%, 50%, 0.5)">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Completed application form</li>
          <li>Latest academic records</li>
          <li>Copy of ID or passport</li>
          <li>Proof of residence</li>
          <li>Recommendation letter from a teacher or guardian</li>
        </ul>
      </div>

      {/* Steps Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Steps to Apply</h2>
        <ol className="list-decimal list-inside text-gray-700">
        <li className="mb-2">
            <strong>Step 1:</strong> To apply online, fill in the application form for admission <a href="/admissionsform" className="text-amber-500">here</a>.
          </li>
          <h1> OR: <br></br>To Apply Offline:<br></br></h1>
          <li className="mb-2">
            <strong>Step 1:</strong> Download the application form from our <a href="/Downloads" className="text-amber-500">downloads</a> page.
          </li>
          <li className="mb-2">
            <strong>Step 2:</strong> Fill out the application form completely.
          </li>
          <li className="mb-2">
            <strong>Step 3:</strong> Gather all required documents.
          </li>
          <li className="mb-2">
            <strong>Step 4:</strong> Submit your application form and documents in person or via email.
          </li>
          <li className="mb-2">
            <strong>Step 5:</strong> Wait for a confirmation email regarding your application status.
          </li>
        </ol>
      </div>

      {/* Contact Information Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-hsla(210, 100%, 50%, 0.5)">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions regarding the application process, please reach out to us:
        </p>
        <p className="text-gray-700">
          Email: <Link href="mailto:info@school.co.za" className="text-blue-900 underline">info@school.co.za</Link>
        </p>
        <p className="text-gray-700">
          Phone: <span className="text-blue-900">(+27) 11 123 4567</span>
        </p>
      </div>
    </div>
  );
};

export default HowToApply;
