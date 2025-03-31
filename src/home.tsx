import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, MessagesSquare, Send, Search, Headphones } from 'lucide-react';

const models = [
  {
    name: 'Avatr 06', colors: [
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_01.jpg?v=4', hex: '#000000' },
      { name: 'orange', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_06.jpg?v=4', hex: '#ffa500' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_02.jpg?v=4', hex: '#B0B7C6' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_03.jpg?v=4', hex: '#301934' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_04.jpg?v=4', hex: '#FFFFFF' },
      { name: 'light purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e06-color/car-color_05.jpg?v=4', hex: '#CBC3E3' }
    ]
  },
  {
    name: 'Avatr 07', colors: [
      { name: 'purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_01.jpg?v=5', hex: '#800080' },
      { name: 'olive', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_02.jpg?v=5', hex: '#808000' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_03.jpg?v=5', hex: '#800000' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_04.jpg?v=5', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e07-color/car-color_05.jpg?v=5', hex: '#78797e' }
    ]
  },
  {
    name: 'Avatr 11', colors: [
      { name: 'gold', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_01.jpg', hex: '#fff0db' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_03.jpg', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_04.jpg', hex: '#78797e' },
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_05.jpg', hex: '#000000' },
      { name: 'matte titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_07.jpg', hex: '#8A8D9A' },
      { name: 'two-tone black-dial', image: 'https://static.avatr.com/pc-website/images/home3.0/e11-color/car11_08.jpg', hex: '#2F2F2F' }
    ]
  },
  {
    name: 'Avatr 12', colors: [
      { name: 'purple', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_01.jpg?v=2', hex: '#800080' },
      { name: 'white', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_02.jpg?v=2', hex: '#FFFFFF' },
      { name: 'titanium', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_03.jpg?v=2', hex: '#78797e' },
      { name: 'black', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_04.jpg?v=2', hex: '#000000' },
      { name: 'sky blue', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_05.jpg?v=2', hex: '#ADD8E6' },
      { name: 'gold', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_06.jpg?v=2', hex: '#fff0db' },
      { name: 'maroon', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_07.jpg?v=2', hex: '#800000' },
      { name: 'two-tone black-dial', image: 'https://static.avatr.com/pc-website/images/home3.0/e12-color/v3/car-color_08.jpg?v=2', hex: '#2F2F2F' }
    ]
  },
  { name: 'Avatr 011', image: 'https://static.avatr.com/pc-website/images/e11ica1.0/car011_01.jpg' },
  { name: 'Avatr 012', image: 'https://static.avatr.com/pc-website/images/home3.0/pc/car012_01.jpg' }
];

const Home = () => {
  const [selectedModel, setSelectedModel] = useState('Avatr 06');
  const [selectedColor, setSelectedColor] = useState('black');
  const [imageError, setImageError] = useState(false);
  const shoppingToolsRef = useRef(null);

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

  useEffect(() => {
    const currentModel = models.find(model => model.name === selectedModel);
    if (currentModel?.colors?.length > 0) {
      setSelectedColor(currentModel.colors[0].name);
      setImageError(false);
    } else {
      setSelectedColor('');
      setImageError(false);
    }
  }, [selectedModel]);

  const currentModel = models.find(model => model.name === selectedModel);
  const fallbackImage = 'https://via.placeholder.com/800x450?text=Image+Not+Available';

  if (!currentModel) {
    return <div className="text-center py-24 md:py-24">Model not found.</div>;
  }

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-screen md:h-screen overflow-hidden font-cinzel">
        <div className="absolute inset-0">
          <img
            src="https://imgur.com/LMGwsHM.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover transform transition-transform duration-300 md:group-hover:scale-105"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-start max-w-sm">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 animate-float tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              First-in-Class
            </h1>
            <h3 className="text-xs md:text-sm lg:text-base font-normal text-white/80 animate-float tracking-wide mb-4 md:mb-6">
              First Class Auto
            </h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <a
                href="https://www.facebook.com/firstclassautokh/about"
                className="text-white px-4 md:px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessagesSquare size={16} /> Messenger
              </a>
              <a
                href="https://t.me/FirstClass_Auto"
                className="text-white px-4 md:px-5 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm tracking-wide"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={16} /> Telegram
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 tracking-widest font-cinzel">Explore Avatr</h2>

          {/* Model Selection */}
          <div className="flex overflow-x-auto md:flex-wrap justify-start md:justify-center gap-4 md:gap-8 mb-8 md:mb-16 font-cinzel pb-2 md:pb-0 scrollbar-hide snap-x snap-mandatory">
            {['Avatr 06', 'Avatr 07', 'Avatr 11', 'Avatr 12', 'Avatr 011', 'Avatr 012'].map((modelName) => (
              <button
                key={modelName}
                className={`text-base md:text-lg whitespace-nowrap px-3 py-1 rounded-full transition-all duration-300 ${selectedModel === modelName
                  ? 'text-black font-bold bg-gray-100'
                  : 'text-gray-400 font-normal hover:text-black'
                  }`}
                onClick={() => setSelectedModel(modelName)}
              >
                {modelName}
              </button>
            ))}
          </div>

          {/* Car Image */}
          <div className="relative aspect-[16/9] mb-16 md:mb-20">
            {currentModel.image ? (
              imageError || !currentModel.image ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm md:text-base">
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
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm md:text-base">
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
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm md:text-base">
                No image available for this model
              </div>
            )}
          </div>

          {/* Color Selection - Adjusted position and formatting */}
          {currentModel.colors && currentModel.colors.length > 0 && (
            <div className="flex flex-col items-center mt-8 md:mt-12 gap-6 md:gap-8">
              <div className="flex justify-center w-full max-w-3xl">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-4">
                  {currentModel.colors.map((color) => (
                    <button
                      key={color.name}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-300 flex-shrink-0 ${selectedColor === color.name
                          ? 'border-black scale-110 shadow-lg'
                          : 'border-gray-200 md:hover:border-gray-400 md:hover:scale-105'
                        }`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
              <p className="text-base md:text-lg capitalize font-normal tracking-wide text-gray-800">{selectedColor}</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section id="vehicles" className="py-12 md:py-24 px-4 md:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-neutral-900 tracking-widest font-cinzel">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { image: "https://imgur.com/ItYWprh.jpg", name: "2025 Avatr 12 Royal Master", engine: "Dual Electric Motors", HP: "578", topSpeed: "220 km/h" },
              { image: "https://i.imgur.com/nPLnEG5.jpg", name: "2025 BMW i3", engine: "Electric Synchronous Motor", HP: "168", topSpeed: "150 km/h" },
              { image: "https://imgur.com/9hZRRl2.jpg", name: "2025 Cadillac OPTIQ", engine: "Dual Electric Motors", HP: "300", topSpeed: "209 km/h" }
            ].map((vehicle, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 md:hover:shadow-2xl md:hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full aspect-[4/3] object-cover rounded-t-xl transition-transform duration-300 md:group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                </div>
                <div className="p-4 md:p-6 relative">
                  <div className="absolute -top-4 left-4 md:left-6 bg-neutral-900 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-bold shadow-md tracking-widest font-cinzel">
                    {vehicle.name}
                  </div>
                  <div className="mt-4 md:mt-4">
                    <p className="text-neutral-700 text-xs md:text-sm font-normal tracking-wide">
                      <span className="font-medium">Engine:</span> {vehicle.engine}
                    </p>
                    <p className="text-neutral-700 text-xs md:text-sm font-normal tracking-wide">
                      <span className="font-medium">Horsepower:</span> {vehicle.HP}
                    </p>
                    <p className="text-neutral-700 text-xs md:text-sm font-normal tracking-wide">
                      <span className="font-medium">Top Speed:</span> {vehicle.topSpeed}
                    </p>
                  </div>
                  <a
                    href="https://t.me/firstclassautokh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 md:mt-4 text-xs text-neutral-900 bg-neutral-100 px-3 py-2 rounded-full hover:bg-neutral-200 md:hover:gap-2 transition-all duration-300 font-medium font-nunito"
                  >
                    Purchase <ChevronRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative bg-neutral-800/50 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg border border-neutral-700/50 md:hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://i.imgur.com/0ZQt2WE.png"
                alt="First Class Auto Logo"
                className="h-12 md:h-16 mb-4 md:mb-6"
                onError={() => setImageError(true)}
              />
              <div className="text-neutral-300 leading-relaxed font-normal tracking-wide text-sm md:text-base">
                <p>First Class Auto is Cambodia’s #1 dealership. Period.</p>
                <p>A First Class Team to deliver you First Class Cars & First Class Deals.</p>
                <p>There's a reason why our clients call us First Class Auto.</p>
              </div>
              <div className="mt-6 flex flex-col gap-4 items-center md:flex-row md:justify-start md:gap-4">
                <a
                  href="https://www.facebook.com/firstclassautokh/about"
                  className="w-full md:w-auto text-white px-6 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessagesSquare size={16} /> Messenger
                </a>
                <a
                  href="https://t.me/FirstClass_Auto"
                  className="w-full md:w-auto text-white px-6 py-2 text-sm font-medium rounded-full border border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={16} /> Telegram
                </a>
              </div>
            </div>
            <div className="relative h-[200px] md:h-[300px] lg:h-[500px] rounded-xl overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover brightness-[1.05]"
              >
                <source src="https://imgur.com/gQOmFfC.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Tools Section */}
      <section
        id="contact"
        ref={shoppingToolsRef}
        className="py-12 md:py-24 px-4 md:px-8 bg-white md:interactive-gradient relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center tracking-widest uppercase text-black mb-8 md:mb-12">
            Shopping Tools
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            <Link to="/our-collection" className="flex flex-col items-center group">
              <Search size={28} className="text-neutral-500 mb-2 md:group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black md:group-hover:text-neutral-700 transition-colors duration-300">
                Shop
              </p>
            </Link>
            <a
              href="https://maps.app.goo.gl/yZGNftYRb6ggQEKSA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <MapPin size={28} className="text-neutral-500 mb-2 md:group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black md:group-hover:text-neutral-700 transition-colors duration-300">
                Visit Us
              </p>
            </a>
            <Link to="/team" className="flex flex-col items-center group">
              <Headphones size={28} className="text-neutral-500 mb-2 md:group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-black md:group-hover:text-neutral-700 transition-colors duration-300">
                Consult an Expert
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;