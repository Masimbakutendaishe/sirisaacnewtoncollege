import Link from 'next/link';

const AdmissionRequirements = () => {
  return (
    <div className="bg-blue-100 p-8">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">Admission Requirements</h1>
      </div>

      {/* General Requirements Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border border-hsla(210, 100%, 50%, 0.5)">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">General Requirements</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Completed admission application form</li>
          <li>Official academic transcripts from previous schools</li>
          <li>Copy of identification document (ID or passport)</li>
          <li>Proof of residency</li>
          <li>Recent passport-sized photographs</li>
          <li>Application fee payment receipt</li>
        </ul>
      </div>

      {/* Specific Program Requirements Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Specific Program Requirements</h2>
        <p className="text-gray-700 mb-2">
          Different programs may have specific requirements. Here are a few examples:
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Science Programs:</strong> Minimum of 60% in Mathematics and Physical Science.
          </li>
          <li>
            <strong>Arts Programs:</strong> Portfolio submission for creative disciplines.
          </li>
          <li>
            <strong>Engineering Programs:</strong> Entrance exam and interview may be required.
          </li>
        </ul>
      </div>

      {/* Additional Information Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-hsla(210, 100%, 50%, 0.5)">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Additional Information</h2>
        <p className="text-gray-700 mb-2">
          For detailed information regarding program-specific requirements, please visit our website or contact us directly.
        </p>
        <Link href="/programs" className="text-blue-900 underline">
          View Programs Offered
        </Link>
      </div>

      {/* Contact Information Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border border-hsla(210, 100%, 50%, 0.5)">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Us</h2>
        <p className="text-gray-700">
          If you have questions regarding admission requirements, please reach out:
        </p>
        <p className="text-gray-700">
          Email: <Link href="mailto:admissions@school.co.za" className="text-blue-900 underline">admissions@school.co.za</Link>
        </p>
        <p className="text-gray-700">
          Phone: <span className="text-blue-900">(+27) 11 765 4321</span>
        </p>
      </div>
    </div>
  );
};

export default AdmissionRequirements;
