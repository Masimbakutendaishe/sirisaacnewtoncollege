const QuickNavbar = () => {
    return (
      <header className="flex justify-between items-center p-2.5" style={{ backgroundColor: "hsla(32, 91%, 18%, 0.945)" }}>

        <nav className="flex justify-center w-full">
          <ul className="flex gap-16 m-0 p-0">
            <li><span className="font-bold text-white">Quick Links:</span></li>
            <li>
              <a href="mailto:sirisaaccollege@gmail.com?subject=Your%20Subject&body=Your%20message%20here." className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Email
              </a>
            </li>
            <li>
              <a href="/OnlineForms" className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Online Forms
              </a>
            </li>
            <li>
              <a href="/Downloads" className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Downloads
              </a>
            </li>
            <li>
              <a href="/Timetable" className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Timetable
              </a>
            </li>
            <li>
              <a href="/Alumni" className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Alumni
              </a>
            </li>
            <li>
              <a href="tel: +2776 665 5566" className="text-white text-lg relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default QuickNavbar;
  