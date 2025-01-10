import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full font-sans">
            {/* CTA Section */}
            <div className="bg-[#a9e0e567] text-navy py-5 text-center">
                <div className="mx-auto max-w-screen-lg">
                    <h2 className="text-blue-900 text-2xl font-bold mb-2">FIND OUT MORE & APPLY</h2>
                    <p className="text-blue-950 text-lg">Do you feel inspired to join the Sir Isaac Newton College community? If so, our Registrar is available to assist and lead you through the application process. To find out more information, visit our Admissions page.</p>
                </div>
            </div>

            {/* Links Section */}
            <div className="bg-black text-white py-10 px-5 flex flex-wrap justify-between">
                {/* Contact Us */}
                <div className="flex-1 mr-5">
                    <h3 className="text-xl mb-2">Contact Us</h3>
                    <p className="text-lg">
                        142 Stanton Street, Turfontein<br />
                        Johannesburg<br />
                        South Africa<br />
                        <a href="tel:+27826677554" className="hover:underline">+27826677554</a>
                    </p>
                </div>

                {/* Explore */}
                <div className="flex-1 mr-5">
                    <h3 className="text-xl mb-2">Explore</h3>
                    <ul className="list-none p-0">
                        <li><a href="/ABOUTUS" className="hover:text-brown hover:underline">About Us</a></li>
                        <li><a href="/EVENTS" className="hover:text-brown hover:underline">Events</a></li>
                        <li><a href="/CLUBS" className="hover:text-brown hover:underline">Clubs</a></li>
                        <li><a href="tel:+27826677554" className="hover:text-brown hover:underline">Contact Us</a></li>
                        <li><a href="#youtube" className="hover:text-brown hover:underline">Youtube</a></li>
                        <li><a href="#vimeo" className="hover:text-brown hover:underline">Vimeo</a></li>
                    </ul>
                </div>

                {/* Essentials */}
                <div className="flex-1 mr-5">
                    <h3 className="text-xl mb-2">Essentials</h3>
                    <ul className="list-none p-0">
                        <li><a href="/ACADEMICS" className="hover:text-brown hover:underline">Academics</a></li>
                        <li><a href="/ADMISSIONS" className="hover:text-brown hover:underline">Admissions</a></li>
                        <li><a href="/facilities" className="hover:text-brown hover:underline">Facility Services</a></li>
                        <li><a href="/CLUBS" className="hover:text-brown hover:underline">Clubs</a></li>
                        <li><a href="/EVENTS" className="hover:text-brown hover:underline">Events</a></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="flex-1 mr-5">
                    <h3 className="text-xl mb-2">Quick Links</h3>
                    <ul className="list-none p-0">
                        <li><a href="mailto:example@gmail.com" className="hover:text-brown hover:underline">Email Login</a></li>
                        <li><a href="/Downloads" className="hover:text-brown hover:underline">Downloads</a></li>
                        <li><a href="/courses" className="hover:text-brown hover:underline">Library</a></li>
                        <li><a href="/Timetable" className="hover:text-brown hover:underline">Timetables</a></li>
                        <li><a href="/apply" className="hover:text-brown hover:underline">Apply For Admission</a></li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex-1">
                    <img src="/path-to-logo.png" alt="Isaac Newton College Logo" className="max-w-xs mx-auto" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black text-white py-3 text-center">
                <p>&copy; 2024 TEEM SHE for Sir Isaac Newton College. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src="/fbicon.png" alt="Facebook" className="w-6 h-auto" /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src="/igicon.png" alt="Instagram" className="w-6 h-auto" /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/liicon.png" alt="LinkedIn" className="w-6 h-auto" /></a>
                    <a href="mailto:example@gmail.com"><img src="/gmailicon.png" alt="Gmail" className="w-6 h-auto" /></a>
                    <a href="tel:+27826677554"><img src="/phone.png" alt="Contact Number" className="w-6 h-auto" /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
