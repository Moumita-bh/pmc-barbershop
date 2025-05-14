import React from 'react';
import barbershopImage from '../assets/barbershopImage.png';

const Hero = () => {
const data = [
  {
    icon: 'https://pmcbarber.devfrend.com/images/salonCommon/hair-styling-icon.svg',
    title: 'Haircuts',
    desc: 'Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.',
    list: ['Classic Cuts', 'Modern Styles'],
  },
  {
    icon: 'https://pmcbarber.devfrend.com/images/salonCommon/makeup-icon.svg',
    title: 'Beard Services',
    desc: 'Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.',
    list: ['Beard Trims', 'Beard Shaping'],
  },
  {
    icon: 'https://pmcbarber.devfrend.com/images/salonCommon/skincare-icon.svg',
    title: 'Premium Services',
    desc: 'Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.',
    list: ['Hair Coloring', 'Scalp Treatments'],
    highlight: true,
  },
];

const features = [
    {
      icon: "User",
      title: "Expert Barbers",
      description:
        "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
    },
    {
      icon: "Scissors",
      title: "Premium Tools & Products",
      description:
        "We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.",
    },
    {
      icon: "Home",
      title: "Classic Barbershop Experience",
      description:
        "Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.",
    },
  ];


return (
    <section className="bg-gradient-to-r from-black to-gray-900 text-white px-6 py-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
        {/* Left */}
        <div className="flex-1">
          <p className="text-yellow-400 font-semibold mb-2">
            Premium Barber Services in Denton
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Classic Cuts, Modern Style
          </h1>
          <h2 className="text-5xl text-yellow-400 font-bold text-3xl mt-4 underline decoration-yellow-500 decoration-4 underline-offset-4">
            Premium Barber Shop
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </p>

          <div className="flex items-center mt-6 gap-4">
            <span className="bg-gray-800 px-4 py-2 rounded-md flex items-center gap-2">
              📍 Denton, TX
            </span>
          </div>

          {/* Buttons */}
          <div className="max-w-sm w-full mt-6 space-y-3">
            {/* Our Services Button */}
  <button className="w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-3 px-6 rounded-md border border-gray-600 hover:bg-gray-800 transition">
    {/* Phone Icon SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h1.6a1 1 0 011 .76l1.2 5.28a1 1 0 01-.27.94l-2.2 2.2a16 16 0 006.4 6.4l2.2-2.2a1 1 0 01.94-.27l5.28 1.2a1 1 0 01.76 1V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
    </svg>
    Our Services
  </button>

  {/* Book Now Button */}
  <button className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-white font-medium py-3 px-6 rounded-md hover:bg-yellow-500 transition">
    {/* Phone Icon SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h1.6a1 1 0 011 .76l1.2 5.28a1 1 0 01-.27.94l-2.2 2.2a16 16 0 006.4 6.4l2.2-2.2a1 1 0 01.94-.27l5.28 1.2a1 1 0 01.76 1V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
    </svg>
    Book Now
  </button>
 {/* Down Arrow Icon - Looks like ↓ */}
<a href="#next-section" className="flex justify-center mt-15 hover:scale-110 transition" aria-label="Scroll down">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
</a>

          </div>
        </div>

        {/* Right */}
        <div className="flex-1">
          <img
            src="https://pmcbarber.devfrend.com/images/pmcbarber/hero.webp"
            alt="PMC Barbers"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
      {/* About Section */}
      <div id="about-section" className="mt-70 text-center">
        <h3 className="text-yellow-400 text-sm font-semibold">Our Story</h3>
        <h2 className="relative text-3xl md:text-4xl font-bold text-white mt-2 inline-block group">
  About PMC Barbershop
  <span className="absolute left-1/2 -bottom-1.5 w-20 h-1 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-100"></span>
</h2>
        <p className="text-gray-400 mt-10 max-w-3xl mx-auto text-lg">
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="text-white py-12 px-6 md:px-16 flex flex-col md:flex-row gap-10 items-start">
      {/* Left Image with Tag */}
      <div className="relative rounded-2xl overflow-hidden w-full md:w-1/2 shadow-lg">
        <img
          src={barbershopImage}
          alt="PMC Barbershop"
          className="w-full h-auto object-cover"
        />
        <div className="absolute bottom-5 right-5 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl text-sm shadow-md">
          5+ years
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="border-l-4 border-yellow-400 pl-4">
          <p className="text-lg text-gray-300">
            <span className="text-white font-semibold">Established in 2018,</span> PMC Barbershop has been
            providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional
            haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-inner">
          <p className="text-yellow-500 text-2xl mb-3">“</p>
          <p className="text-gray-400 text-base leading-relaxed">
            We take pride in our attention to detail and personalized service, ensuring each client leaves looking
            and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create
            custom styles that suit each individual's personality and lifestyle.
          </p>
        </div>
      </div>
    </div>

    <div id="about-section" className="mt-70 text-center">
        <h3 className="text-yellow-400 text-sm font-semibold">Premium Grooming</h3>
        <h2 className="relative text-3xl md:text-4xl font-bold text-white mt-2 inline-block group">
  Our Barber Services
  <span className="absolute left-1/2 -bottom-1.5 w-20 h-1 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-82"></span>
</h2>
        <p className="text-gray-400 mt-10 max-w-3xl mx-auto text-lg">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-30 py-10 pr-20  w-350 h-140 text-white">
      {data.map((d, i) => (
        <div key={i} className="relative bg-[#1b1b1b] rounded-xl p-6 pt-8 group transition duration-300 hover:-translate-y-2 shadow-md ">
          <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-yellow-500 transition duration-300 rounded-t-xl" />
          <div className="w-18 h-18 mb-10 mt-10 flex items-center justify-center bg-[#2a2a2a] rounded-md">
            <img src={d.icon} alt="icon" className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-10 text-white group-hover:text-yellow-500 transition duration-300">
            {d.title}
          </h3>
          <p className="text-base text-gray-600 leading-relaxed mb-3">{d.desc}</p>
          <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
            {d.list.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>

    <div id="about-section" className="mt-70 text-center">
        <h3 className="text-yellow-400 text-sm font-semibold">Our Commitment</h3>
        <h2 className="relative text-3xl md:text-4xl font-bold text-white mt-2 inline-block group">
  Why Choose PMC Barbershop?
  <span className="absolute left-1/2 -bottom-1.5 w-20 h-1 bg-yellow-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-126"></span>
</h2>
        <p className="text-gray-400 mt-10 max-w-3xl mx-auto text-lg">
          What makes us the premier barbershop in Denton, TX.
        </p>

        
      </div>
    
     <div className="min-h-screen  flex justify-center items-center p-8 mt-[-150px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl h-80">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#181818] rounded-xl border-l-4 border-yellow-500 p-6 shadow-md transition-all duration-300 ease-in-out
                       hover:-translate-y-2 hover:shadow-xl hover:border-l-0 hover:border-t-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#2e281b] text-yellow-400 px-4 py-2 rounded-xl font-semibold">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-10 mt-10">{feature.title}</h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    
    </section>
  );
};

export default Hero;
