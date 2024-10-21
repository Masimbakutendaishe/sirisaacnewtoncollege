import { useEffect, useState } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const SchoolCalendar = () => {
  const [importantDates, setImportantDates] = useState([]);

  useEffect(() => {
    const fetchImportantDates = async () => {
      try {
        const response = await client.getEntries({ content_type: 'importantDates' });
        setImportantDates(response.items);
      } catch (error) {
        console.error('Error fetching content from Contentful:', error);
      }
    };

    fetchImportantDates();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/image.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">SCHOOL CALENDAR</h1>
      </div>

      {/* Calendar Overview Section */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
        <p className="text-gray-700 mb-6">
          Stay updated with our school calendar! Here are the important dates for the academic year:
        </p>

        {/* Important Dates Table Section */}
        <h3 className="text-2xl font-semibold mb-2">Academic Year Important Dates</h3>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-8">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="text-left py-2 px-4 border-b">Event</th>
              <th className="text-left py-2 px-4 border-b">Date</th>
              <th className="text-left py-2 px-4 border-b">Notes</th>
            </tr>
          </thead>
          <tbody>
            {importantDates.map((date) => (
              <tr key={date.sys.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{date.fields.event}</td>
                <td className="font-bold py-2 px-4 border-b">{date.fields.date}</td>
                <td className="py-2 px-4 border-b">{date.fields.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Conclusion Section */}
        <h2 className="text-3xl font-bold mb-4">Stay Informed!</h2>
        <p className="text-gray-700">
          Keep an eye on this calendar for updates and changes throughout the year. Make sure to mark your calendars for these important dates!
        </p>
      </div>
    </div>
  );
};

export default SchoolCalendar;
