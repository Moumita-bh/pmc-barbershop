import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 pl-23">
        <img src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75" alt="PMC Logo" className="h-10" />
      </div>
      <ul className="hidden md:flex gap-6 text-lg">
        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#" className="hover:text-yellow-400">About</a></li>
        <li><a href="#" className="hover:text-yellow-400">Services</a></li>
        <li><a href="#" className="hover:text-yellow-400">Gallery</a></li>
        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
      </ul>
      <div className="flex items-center gap-4 pr-22">
        <span className="text-yellow-400 hidden md:inline">📞 +19408081569</span>
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-300">
          Book an Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
