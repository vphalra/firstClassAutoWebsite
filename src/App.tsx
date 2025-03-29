import React, { useState, useEffect } from 'react';
import { Car, MapPin, Phone, Clock, ChevronRight, Instagram, Facebook, MessagesSquare, Send } from 'lucide-react';

// Define models with their colors outside the component
const models = [
  {
    name: 'Avatr 06',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_01.jpg?v=4', hex: '#000000' },
      { name: 'orange', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_06.jpg?v=4', hex: '#FFA500' },
      { name: 'grey', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_02.jpg?v=4', hex: '#808080' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_03.jpg?v=4', hex: '#301934' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_04.jpg?v=4', hex: '#FFFFFF' },
      { name: 'light purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_05.jpg?v=4', hex: '#E6E6FA' }
    ]
  },
  {
    name: 'Avatr 07',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_01.jpg?v=5', hex: '#000000' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_02.jpg?v=5', hex: '#FFFFFF' },
      { name: 'silver', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_03.jpg?v=5', hex: '#C0C0C0' },
      { name: 'grey', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_04.jpg?v=5', hex: '#808080' },
      { name: 'red', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_05.jpg?v=5', hex: '#FF0000' }
    ]
  },
  {
    name: 'Avatr 11',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_01.jpg', hex: '#000000' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_03.jpg', hex: '#FFFFFF' },
      { name: 'silver', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_04.jpg', hex: '#C0C0C0' },
      { name: 'grey', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_05.jpg', hex: '#808080' },
      { name: 'red', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_07.jpg', hex: '#FF0000' },
      { name: 'blue', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_08.jpg', hex: '#0000FF' }
    ]
  },
  {
    name: 'Avatr 12',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_01.jpg?v=2', hex: '#000000' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_02.jpg?v=2', hex: '#FFFFFF' },
      { name: 'silver', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_03.jpg?v=2', hex: '#C0C0C0' },
      { name: 'grey', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_04.jpg?v=2', hex: '#808080' },
      { name: 'red', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_05.jpg?v=2', hex: '#FF0000' },
      { name: 'blue', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_06.jpg?v=2', hex: '#0000FF' },
      { name: 'purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_07.jpg?v=2', hex: '#800080' },
      { name: 'green', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_08.jpg?v=2', hex: '#008000' }
    ]
  },
  {
    name: 'Avatr 011',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/e11ica1.0/car011_01.jpg', hex: '#000000' }
    ]
  },
  {
    name: 'Avatr 012',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/pc/car012_01.jpg', hex: '#000000' }
    ]
  }
];

function App() {
  // State for selected model and color
  const [selectedModel, setSelectedModel] = useState('Avatr 06');
  const [selectedColor, setSelectedColor] = useState('black');

  // Reset selectedColor to the first color of the new model when selectedModel changes
  useEffect(() => {
    const currentModel = models.find(model => model.name === selectedModel);
    if (currentModel && currentModel.colors.length > 0) {
      setSelectedColor(currentModel.colors[0].name);
    }
  }, [selectedModel]);

  // Get the current model object based on selectedModel
  const currentModel = models.find(model => model.name === selectedModel);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://i.imgur.com/hq55nUP.jpg"
            alt="Luxury showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <nav className="relative z-10 flex items-center px-8 py-6">
          <div className="flex-1">
            <div className="flex gap-8 text-white">
              <a href="#vehicles" className="hover:text-neutral-200 transition">Vehicles</a>
              <a href="#about" className="hover:text-neutral-200 transition">About</a>
            </div>
          </div>
          <div className="flex-shrink-0 mx-8">
            <img 
              src="https://i.imgur.com/hRsBDli.png"
              alt="First Class Auto"
              className="h-12 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all duration-300"
            />
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-8 text-white">
              <a href="#contact" className="hover:text-neutral-200 transition">Contact</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col justify-center h-[calc(100vh-5rem)] px-8 md:px-16 lg:px-24">
          <h1 className="text-6xl font-light text-white mb-12 max-w-xl">
            {selectedModel.toUpperCase()}
          </h1>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/firstclassautokh/about"
              className="bg-[#0099FF] text-white px-8 py-3 rounded-full hover:bg-[#0088EE] transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessagesSquare size={20} /> Messenger
            </a>
            <a 
              href="https://t.me/FirstClass_Auto"
              className="bg-[#229ED9] text-white px-8 py-3 rounded-full hover:bg-[#1E8EC3] transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={20} /> Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Color Selection Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Explore Avatr</h2>
          
          {/* Model Navigation */}
          <div className="flex justify-center gap-8 mb-16">
            {['Avatr 06', 'Avatr 07', 'Avatr 11', 'Avatr 12', 'Avatr 011', 'Avatr 012'].map((modelName) => (
              <button
                key={modelName}
                className={`text-lg ${selectedModel === modelName ? 'text-black' : 'text-gray-400'} hover:text-black transition`}
                onClick={() => setSelectedModel(modelName)}
              >
                {modelName}
              </button>
            ))}
          </div>

          {/* Car Display */}
          <div className="relative aspect-[16/9] mb-16">
            <img
              src={currentModel.colors.find(color => color.name === selectedColor).image}
              alt={`${selectedModel} in ${selectedColor}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Color Selection */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center gap-4">
              {currentModel.colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    selectedColor === color.name
                      ? 'border-black scale-110'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onMouseEnter={() => setSelectedColor(color.name)}
                />
              ))}
            </div>
            <p className="text-lg capitalize">{selectedColor}</p>
            <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
              Know {selectedModel}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://i.imgur.com/aDdQFjw.jpg",
                name: "2025 Avatr 07",
              },
              {
                image: "https://imgur.com/nPLnEG5.jpg",
                name: "2025 BMW i3",
              },
              {
                image: "https://i.imgur.com/DOeZQar.jpg",
                name: "2025 Cadillac OPTIQ",
              }
            ].map((vehicle, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full aspect-[4/3] object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-light">{vehicle.name}</h3>
                  <p className="text-neutral-600">{vehicle.price}</p>
                  <button className="flex items-center gap-2 mt-2 text-sm text-neutral-900 hover:gap-3 transition-all">
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="py-24 px-8 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content with Card Design */}
            <div className="relative bg-neutral-800/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-neutral-700/50 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-4xl font-light mb-6 tracking-wide">About First Class Auto</h2>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Since our establishment, First Class Auto has been Cambodia's leading luxury car dealership. 
                We pride ourselves on offering an exceptional collection of premium vehicles and providing 
                unparalleled customer service.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Our team of automotive experts is dedicated to helping you find the perfect vehicle that 
                matches your lifestyle and preferences. We maintain the highest standards in vehicle 
                selection and after-sales service.
              </p>
              <div className="mt-6 flex gap-4">
                <a 
                  href="https://www.facebook.com/firstclassautokh/about"
                  className="bg-[#0099FF] text-white px-6 py-3 rounded-full hover:bg-[#0088EE] transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessagesSquare size={20} /> Messenger
                </a>
                <a 
                  href="https://t.me/FirstClass_Auto"
                  className="bg-[#229ED9] text-white px-6 py-3 rounded-full hover:bg-[#1E8EC3] transition flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={20} /> Telegram
                </a>
              </div>
            </div>
            {/* Video with Gradient Overlay */}
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://imgur.com/gQOmFfC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-light opacity-80"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-16 text-center">Visit Our Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8">
              <MapPin size={32} className="mb-4" />
              <h3 className="text-xl mb-2">Location</h3>
              <p className="text-neutral-600">123 Norodom Blvd<br />Phnom Penh, Cambodia</p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <Phone size={32} className="mb-4" />
              <h3 className="text-xl mb-2">Contact</h3>
              <p className="text-neutral-600">+855 23 123 456<br />info@firstclassauto.kh</p>
            </div>
            <div className="flex flex-col items-center text-center p-8">
              <Clock size={32} className="mb-4" />
              <h3 className="text-xl mb-2">Hours</h3>
              <p className="text-neutral-600">Mon - Sat: 9AM - 7PM<br />Sunday: 10AM - 5PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Redesigned */}
      <footer className="bg-neutral-900 text-white py-12 px-8 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand and Description */}
          <div>
            <h3 className="text-2xl font-light tracking-wider mb-4">First Class Auto</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Cambodia's premier luxury car dealership, offering an exclusive range of premium vehicles with top-notch customer service.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vehicles" className="text-neutral-400 hover:text-white transition-colors duration-300">Vehicles</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          {/* Contact Info and Social Media */}
          <div>
            <h4 className="text-lg font-light mb-4">Get in Touch</h4>
            <p className="text-neutral-400 text-sm mb-4">
              123 Norodom Blvd, Phnom Penh, Cambodia<br />
              +855 23 123 456 | info@firstclassauto.kh
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://t.me/FirstClass_Auto" className="text-neutral-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} First Class Auto. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;