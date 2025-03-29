import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronRight, Facebook, MessagesSquare, Send, Youtube, Search, Tag, Headphones } from 'lucide-react';

// Define models with their colors or image outside the component
const models = [
  {
    name: 'Avatr 06',
    colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_01.jpg?v=4', hex: '#000000' },
      { name: 'orange', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_06.jpg?v=4', hex: '#FFA500' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_02.jpg?v=4', hex: '#B0B7C6' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_03.jpg?v=4', hex: '#301934' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_04.jpg?v=4', hex: '#FFFFFF' },
      { name: 'sky blue', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_05.jpg?v=4', hex: '#ADD8E6' }
    ]
  },
  {
    name: 'Avatr 07',
    colors: [
      { name: 'purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_01.jpg?v=5', hex: '#800080' },
      { name: 'olive', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_02.jpg?v=5', hex: '#808000' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_03.jpg?v=5', hex: '#800000' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_04.jpg?v=5', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_05.jpg?v=5', hex: '#B0B7C6' }
    ]
  },
  {
    name: 'Avatr 11',
    colors: [
      { name: 'gold', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_01.jpg', hex: '#FFD700' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_03.jpg', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_04.jpg', hex: '#B0B7C6' },
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_05.jpg', hex: '#000000' },
      { name: 'matte titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_07.jpg', hex: '#8A8D9A' },
      { name: 'two-tone black-dial', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_08.jpg', hex: '#2F2F2F' }
    ]
  },
  {
    name: 'Avatr 12',
    colors: [
      { name: 'purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_01.jpg?v=2', hex: '#800080' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_02.jpg?v=2', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_03.jpg?v=2', hex: '#B0B7C6' },
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_04.jpg?v=2', hex: '#000000' },
      { name: 'sky blue', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_05.jpg?v=2', hex: '#ADD8E6' },
      { name: 'gold', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_06.jpg?v=2', hex: '#FFD700' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_07.jpg?v=2', hex: '#800000' },
      { name: 'two-tone black-dial', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_08.jpg?v=2', hex: '#2F2F2F' }
    ]
  },
  {
    name: 'Avatr 011',
    image: 'https://static.avatr.com/pc-website/images/e11ica1.0/car011_01.jpg'
  },
  {
    name: 'Avatr 012',
    image: 'https://static.avatr.com/pc-website/images/home3.0/pc/car012_01.jpg'
  }
];

function App() {
  // State for selected model and color
  const [selectedModel, setSelectedModel] = useState('Avatr 06');
  const [selectedColor, setSelectedColor] = useState('black');
  const [imageError, setImageError] = useState(false);

  // Ref for Shopping Tools section
  const shoppingToolsRef = useRef(null);

  // Event handlers for mouse interaction
  const handleMouseMove = (e) => {
    const section = shoppingToolsRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    section.style.setProperty('--mouse-x', x);
    section.style.setProperty('--mouse-y', y);
  };

  const handleMouseLeave = () => {
    const section = shoppingToolsRef.current;
    if (!section) return;
    section.style.setProperty('--mouse-x', '50%');
    section.style.setProperty('--mouse-y', '50%');
  };

  // Reset selectedColor to the first color of the new model when selectedModel changes
  useEffect(() => {
    const currentModel = models.find(model => model.name === selectedModel);
    if (currentModel && currentModel.colors && currentModel.colors.length > 0) {
      setSelectedColor(currentModel.colors[0].name);
      setImageError(false);
    } else {
      setSelectedColor('');
      setImageError(false);
    }
  }, [selectedModel]);

  // Get the current model object based on selectedModel
  const currentModel = models.find(model => model.name === selectedModel);

  // Fallback image if the main image fails to load
  const fallbackImage = 'https://via.placeholder.com/800x450?text=Image+Not+Available';

  // Guard against undefined currentModel
  if (!currentModel) {
    return <div className="text-center py-24">Model not found.</div>;
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <header className="relative h-screen overflow-hidden font-cinzel">
        <div className="absolute inset-0">
          <img
            src="https://imgur.com/LMGwsHM.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>

        <nav className="relative z-20 flex items-center px-8 py-6">
          <div className="flex-1">
            <div className="flex gap-8 text-white font-bold text-sm tracking-widest">
              <a href="#vehicles" className="hover:text-neutral-200 transition">Vehicles</a>
              <a href="#about" className="hover:text-neutral-200 transition">About</a>
            </div>
          </div>
          <div className="flex-shrink-0 mx-8">
            <img
              src="https://i.imgur.com/hRsBDli.png"
              alt="First Class Auto"
              className="h-12 drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.6)] transition-all duration-300"
              onError={() => setImageError(true)}
            />
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex gap-8 text-white font-bold text-sm tracking-widest">
              <a href="#contact" className="hover:text-neutral-200 transition">Contact</a>
            </div>
          </div>
        </nav>

        <div className="absolute inset-0 flex items-center justify-start px-8 md:px-12">
          <div className="flex flex-col items-start max-w-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-fade-in tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              First-in-Class
            </h1>
            <h3 className="text-sm md:text-base font-normal text-white/80 animate-fade-in-delayed tracking-wide mb-6">
              First Class Auto
            </h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/firstclassautokh/about"
                className="text-white px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessagesSquare size={16} /> Messenger
              </a>
              <a
                href="https://t.me/FirstClass_Auto"
                className="text-white px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} /> Telegram
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Color Selection Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-widest font-cinzel">Explore Avatr</h2>
          <div className="flex justify-center gap-8 mb-16 font-cinzel">
            {['Avatr 06', 'Avatr 07', 'Avatr 11', 'Avatr 12', 'Avatr 011', 'Avatr 012'].map((modelName) => (
              <button
                key={modelName}
                className={`text-lg ${selectedModel === modelName ? 'text-black font-bold' : 'text-gray-400 font-normal'} hover:text-black transition tracking-widest`}
                onClick={() => setSelectedModel(modelName)}
              >
                {modelName}
              </button>
            ))}
          </div>
          <div className="relative aspect-[16/9] mb-16">
            {currentModel.image ? (
              imageError || !currentModel.image ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  Image failed to load
                </div>
              ) : (
                <img
                  src={currentModel.image}
                  alt={selectedModel}
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              )
            ) : currentModel.colors && currentModel.colors.length > 0 ? (
              imageError || !currentModel.colors.find(color => color.name === selectedColor)?.image ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  Image failed to load
                </div>
              ) : (
                <img
                  src={currentModel.colors.find(color => color.name === selectedColor)?.image || fallbackImage}
                  alt={`${selectedModel} in ${selectedColor}`}
                  className="w-full h-full object-contain"
                  onError={() => setImageError(true)}
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                No image available for this model
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-8">
            {currentModel.colors && currentModel.colors.length > 0 ? (
              <>
                <div className="flex justify-center gap-4 flex-wrap">
                  {currentModel.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${selectedColor === color.name
                        ? 'border-black scale-110'
                        : 'border-transparent hover:border-gray-300'
                        }`}
                      style={{ backgroundColor: color.hex }}
                      onMouseEnter={() => setSelectedColor(color.name)}
                      title={color.name}
                    />
                  ))}
                </div>
                <p className="text-lg capitalize font-normal tracking-wide">{selectedColor}</p>
                <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition font-medium tracking-wide">
                  {selectedModel} Specifications
                </button>
              </>
            ) : (
              <button className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition font-medium tracking-wide">
                {selectedModel} Specifications
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section id="vehicles" className="py-24 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-neutral-900 tracking-widest font-cinzel">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://i.imgur.com/aDdQFjw.jpg",
                name: "2025 Avatr 07",
                engine: "Dual Electric Motors",
                HP: "494",
                topSpeed: "200 km/h"
              },
              {
                image: "https://i.imgur.com/nPLnEG5.jpg",
                name: "2025 BMW i3",
                engine: "Electric Synchronous Motor",
                HP: "168",
                topSpeed: "150 km/h"
              },
              {
                image: "https://i.imgur.com/DOeZQar.jpg",
                name: "2025 Cadillac OPTIQ",
                engine: "Dual Electric Motors",
                HP: "300",
                topSpeed: "209 km/h"
              }
            ].map((vehicle, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full aspect-[4/3] object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-4 left-6 bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md tracking-widest font-cinzel">
                    {vehicle.name}
                  </div>
                  <div className="mt-4">
                    <p className="text-neutral-700 text-sm font-normal tracking-wide">
                      <span className="font-medium">Engine:</span> {vehicle.engine}
                    </p>
                    <p className="text-neutral-700 text-sm font-normal tracking-wide">
                      <span className="font-medium">Horsepower:</span> {vehicle.HP}
                    </p>
                    <p className="text-neutral-700 text-sm font-normal tracking-wide">
                      <span className="font-medium">Top Speed:</span> {vehicle.topSpeed}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 mt-4 text-sm text-neutral-900 bg-neutral-100 px-4 py-2 rounded-full hover:bg-neutral-200 hover:gap-3 transition-all duration-300 font-medium tracking-wide">
                    View Details <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated About Us Section */}
      <section id="about" className="py-24 px-8 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content with Card Design */}
            <div className="relative bg-neutral-800/50 backdrop-blur-md p-8 rounded-xl shadow-lg border border-neutral-700/50 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.imgur.com/0ZQt2WE.png"
                alt="First Class Auto Logo"
                className="h-16 mb-6"
                onError={() => setImageError(true)}
              />
              <div className="text-neutral-300 leading-relaxed font-normal tracking-wide">
                <p>First Class Auto is Cambodia’s best dealership. Period.</p>
                <p>A First Class Team to deliver you First Class Cars & First Class Deals.</p>
                <p>There's a reason why our clients call us First Class Auto.</p>
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/firstclassautokh/about"
                  className="text-white px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessagesSquare size={16} /> Messenger
                </a>
                <a
                  href="https://t.me/FirstClass_Auto"
                  className="text-white px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={16} /> Telegram
                </a>
              </div>
            </div>
            {/* Video without darken overlay */}
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-[1.05]" // Optional: increases brightness by 5%
              >
                <source src="https://imgur.com/gQOmFfC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-normal opacity-80 tracking-wide"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Tools Section with Interactive Gradient */}
      <section
        id="contact"
        ref={shoppingToolsRef}
        className="py-24 px-8 bg-white interactive-gradient relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center tracking-widest uppercase text-black mb-12">
            Shopping Tools
          </h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {/* Shop */}
            <div className="flex flex-col items-center group">
              <Search size={32} className="text-neutral-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-700 transition-colors duration-300">
                Shop
              </p>
            </div>

            {/* Visit Us */}
            <a
              href="https://maps.app.goo.gl/yZGNftYRb6ggQEKSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <MapPin size={32} className="text-neutral-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-700 transition-colors duration-300">
                Visit Us
              </p>
            </a>

            {/* Offers */}
            <div className="flex flex-col items-center group">
              <Tag size={32} className="text-neutral-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-700 transition-colors duration-300">
                Offers
              </p>
            </div>

            {/* Consult an Expert */}
            <div className="flex flex-col items-center group">
              <Headphones size={32} className="text-neutral-500 mb-2 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-bold uppercase tracking-widest text-black group-hover:text-neutral-700 transition-colors duration-300">
                Consult an Expert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-8 text-white"
        style={{
          background: 'linear-gradient(to bottom, #A30000, #CC0000)',
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img
              src="https://i.imgur.com/0ZQt2WE.png"
              alt="First Class Auto Logo"
              className="h-12 mb-4"
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/150x50?text=Logo+Not+Available';
              }}
            />
            <p className="text-gray-200 text-sm leading-relaxed font-normal tracking-wide">
              <p>First Class Automobiles</p>
              <p>First Class Service</p>
              <p>First Class Auto</p>
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-widest font-cinzel text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vehicles" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">Vehicles</a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-widest font-cinzel text-white">Get in Touch</h4>
            <div className="text-gray-200 text-sm mb-4 font-normal tracking-wide">
              <p className="leading-relaxed mb-1">#420, Preah Monivong Blvd.</p>
              <p className="leading-relaxed mb-1">Sangkat Boeung Keng Kang I Khan Chamkarmorn</p>
              <p className="leading-relaxed mb-1">Phnom Penh, Cambodia</p>
              <p className="leading-relaxed">+855 85 899 599</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/firstclassautokh" className="text-gray-200 hover:text-[#FF3333] transition-colors duration-300 transform hover:scale-110">
                <Facebook size={24} />
              </a>
              <a href="https://t.me/firstclassautokh" className="text-gray-200 hover:text-[#FF3333] transition-colors duration-300 transform hover:scale-110">
                <Send size={24} />
              </a>
              <a href="https://www.youtube.com/channel/UClxGxfsPhbzeLAMn6RyIdvg" className="text-gray-200 hover:text-[#FF3333] transition-colors duration-300 transform hover:scale-110">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#FF3333] text-center text-gray-300 text-sm font-normal tracking-wide">
          © {new Date().getFullYear()} First Class Auto. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;