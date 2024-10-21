import { createClient } from 'contentful';
import Image from 'next/image';

export async function getStaticProps() {
  // Initialize Contentful client
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  // Fetch the fee structure data from Contentful
  const res = await client.getEntries({ content_type: 'feeStructure' });  // Replace with your content type ID

  // Pass the fee structure to the page
  return {
    props: {
      fees: res.items,
    },
    revalidate: 1,  // Rebuild the page every 1 second if new data is added
  };
}

const FeeStructurePage = ({ fees }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16 px-8">CURRENT SCHOOL FEE STRUCTURE</h1>
      </div>

      {/* Content Section */}
      <div className="p-8">
        
        {/* Fee Structure Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Fee Structure Overview</h2>
          <p className="text-gray-700 mb-4">
            Our fee structure is designed to provide quality education while ensuring affordability. Below is the detailed breakdown of fees for different grades:
          </p>

          {/* Styled Table for Fee Structure */}
          <table className="min-w-full bg-white border border-gray-300 mb-8">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Grade</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Tuition Fees</th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">Additional Fees</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through the fetched fees and display them */}
              {fees.map((fee) => (
                <tr key={fee.sys.id}>
                  <td className="py-2 px-4 border-b border-gray-300">{fee.fields.grade}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{fee.fields.tuitionFees}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{fee.fields.additionalFees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Payment Options Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Payment Options</h2>
          <p className="text-gray-700 mb-4">
            We offer various payment options to accommodate our families. Payments can be made via:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Bank Transfer</li>
            <li>Cash Payment at the School Office</li>
            <li>Online Payment Portal</li>
          </ul>
        </section>

        {/* Important Notes Section */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Notes</h2>
          <p className="text-gray-700 mb-4">
            - Fees are due at the beginning of each term.<br />
            - Late payments may incur additional charges.<br />
            - For financial assistance or scholarships, please contact the school administration.
          </p>
        </section>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src="/images/image2.jpg" // Replace with your image path
              alt="School Facilities"
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/images/culture.png" // Replace with your image path
              alt="Learning Environment"
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

export default FeeStructurePage;
