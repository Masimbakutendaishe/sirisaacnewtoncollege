import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="flex justify-center items-center px-5 py-2.5 bg-white relative mr-10">
      <a className="mr-auto ml-10">
        <Image src="/logo.png" alt="Logo" className="cursor-pointer" width={180} height={60} />
      </a>
      <nav>
        <ul className="flex gap-7 items-center m-0 font-bold">
          <li className="relative p-2.5 group">
            <Link href="/" className=" text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              HOME
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li className="relative p-2.5 group">
            <a href="/ABOUTUS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              ABOUT US
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/history"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Our History
                </Link>
                <Link
                  href="/mission"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Mission Statement
                </Link>
                <Link
                  href="/studentlife"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Student Life
                </Link>
              </div>
            </div>
          </li>
          <li className="relative p-2.5 group">
            <a href="/ACADEMICS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              ACADEMICS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/courses"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Courses
                </Link>
                <Link
                  href="/facilities"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Facilities
                </Link>
              </div>
            </div>
          </li>
          <li className="relative p-2.5 group">
            <a href="/ADMISSIONS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              ADMISSIONS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/apply"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  How to Apply
                </Link>
                <Link
                  href="/requirements"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Admission Requirements
                </Link>
              </div>
            </div>
          </li>
          <li className="relative p-2.5 group">
            <a href="/SPORTS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              SPORTS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/teams"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Our Teams
                </Link>
                <Link
                  href="/facilities2"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Sports Facilities
                </Link>
              </div>
            </div>
          </li>
          <li className="relative mr-12 p-2.5 group">
            <a href="/CLUBS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              CLUBS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[160px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/chess"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Chess Club
                </Link>
                <Link
                  href="/drama"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Drama Club
                </Link>
              </div>
            </div>
          </li>
          <li className="relative p-2.5 group">
            <a href="/EVENTS" className="text-blue-900 text-lg font-bold relative group-hover:text-blue-900 transition-colors duration-300">
              EVENTS
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="hidden absolute top-full left-0 bg-white border border-blue-900 p-2.5 min-w-[140px] z-50 text-left group-hover:block">
              <div className="group">
                <Link
                  href="/calendar"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Calendar
                </Link>
                <Link
                  href="/events2"
                  className="block text-blue-900 text-md p-2 relative transition-colors duration-300 hover:bg-blue-900 hover:text-white rounded"
                >
                  Upcoming Events
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
