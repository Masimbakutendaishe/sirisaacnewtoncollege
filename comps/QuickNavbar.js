import React, { useState } from 'react';
import Link from 'next/link'
const QuickNavbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between items-center p-2.5" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>
      <nav className="flex justify-center w-full">
        {/* Display Quick Links as a clickable element if the width is below 960 */}
        <div className="md:hidden">
        <li className="list-none relative p-2.5 group">
            <a href="/index" className="text-white list-none text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              Quick Links
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="mailto:sirisaaccollege@gmail.com?subject=Your%20Subject&body=Your%20message%20here."
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Email
                </Link>
                <Link
                  href="/OnlineForms"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Online Forms
                </Link>
                <Link
                  href="/Downloads"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Downloads
                </Link>
                <Link
                  href="/Timetable"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Timetable
                </Link>
                <Link
                  href="/Alumni"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Alumni
                </Link>
                <Link
                  href="tel:+27766655566"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Contact Us
                </Link>

              </div>
            </div>
          </li>
          
          
          
        </div>

        {/* Show the links for screen widths 960px and above */}
        <ul className="hidden md:flex gap-16 m-0 p-0">
          <li>
            <span className="font-bold text-white">Quick Links:</span>
          </li>
          <li>
            <a
              href="mailto:sirisaaccollege@gmail.com?subject=Your%20Subject&body=Your%20message%20here."
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="/OnlineForms"
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Online Forms
            </a>
          </li>
          <li>
            <a
              href="/Downloads"
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Downloads
            </a>
          </li>
          <li>
            <a
              href="/Timetable"
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Timetable
            </a>
          </li>
          <li>
            <a
              href="/Alumni"
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Alumni
            </a>
          </li>
          <li>
            <a
              href="tel:+27766655566"
              className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default QuickNavbar;
