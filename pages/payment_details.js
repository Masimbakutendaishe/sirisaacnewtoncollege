import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createClient } from 'contentful';

// Contentful client setup
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const PaymentDetailsPage = () => {
  const [paymentDetails, setPaymentDetails] = useState([]);

  // Fetch payment details from Contentful
  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await client.getEntries({ content_type: 'paymentDetails' }); // Replace with your content type ID
        const details = response.items.map((item) => item.fields);
        setPaymentDetails(details);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      }
    };

    fetchPaymentDetails();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">PAYMENT DETAILS</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">
        
        {/* Payment Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Payment Overview</h2>
          <p className="text-gray-700 mb-4">
            We strive to provide a seamless payment experience for all our students and their families. Below you will find detailed information about our payment process and options.
          </p>
        </section>

        {/* Payment Methods Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Payment Methods</h2>
          <p className="text-gray-700 mb-4">
            Payments can be made using the following methods:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Bank Transfer</li>
            <li>Cash Payments</li>
            <li>Online Payment Portal</li>
            <li>Mobile Payment Options</li>
          </ul>
        </section>

        {/* Payment Schedule Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Payment Schedule</h2>
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Term</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              {paymentDetails.length > 0 ? (
                paymentDetails.map((detail, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-300">{detail.term}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{detail.dueDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="py-2 px-4 border-b border-gray-300 text-center">
                    Loading payment details...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        {/* Important Notes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Notes</h2>
          <p className="text-gray-700 mb-4">
            - Payments must be completed by the due date to avoid late fees.<br />
            - For any questions regarding payments, please contact the finance office.<br />
            - Financial assistance options are available for eligible families.
          </p>
        </section>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="Payment Process"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/culture.png" // Replace with your image path
              alt="Financial Assistance"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PaymentDetailsPage;
