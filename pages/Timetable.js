import Image from 'next/image';
import Link from 'next/link';

const TimetablesPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image for the Heading */}
      <div className="relative h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/clock.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-left text-white text-5xl font-bold z-10 py-16">CLASS TIMETABLES</h1>
      </div>

      {/* Timetable Section */}
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Downloadable Timetables</h2>
        <ul className="space-y-4">
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade R Timetable</span>
            <Link href="/downloads/timetable-gradeR.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 1 Timetable</span>
            <Link href="/downloads/timetable-grade1.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 2 Timetable</span>
            <Link href="/downloads/timetable-grade2.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 3 Timetable</span>
            <Link href="/downloads/timetable-grade3.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 4 Timetable</span>
            <Link href="/downloads/timetable-grade4.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 5 Timetable</span>
            <Link href="/downloads/timetable-grade5.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 6 Timetable</span>
            <Link href="/downloads/timetable-grade6.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 7 Timetable</span>
            <Link href="/downloads/timetable-grade7.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 8 Timetable</span>
            <Link href="/downloads/timetable-grade8.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 9 Timetable</span>
            <Link href="/downloads/timetable-grade9.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 10 Timetable</span>
            <Link href="/downloads/timetable-grade10.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 11 Timetable</span>
            <Link href="/downloads/timetable-grade11.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
          <li className="bg-blue-900 rounded-lg shadow-lg p-4 flex justify-between items-center">
            <span className="text-xl text-white font-semibold">Grade 12 Timetable</span>
            <Link href="/downloads/timetable-grade12.pdf" legacyBehavior>
              <a className="text-white bg-hsla(32, 91%, 18%, 0.945) py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-900">
                Download
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TimetablesPage;
