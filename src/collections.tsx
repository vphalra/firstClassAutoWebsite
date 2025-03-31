import React, { useState } from 'react';
import { Search, ChevronDown, Star } from 'lucide-react';

interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  category: string;
  horsepower: number;
  topSpeed: number;
  seating: number;
  image: string;
  featured?: boolean;
}

const cars: Car[] = [
  { id: 1, name: "Model Y Launch Edition", brand: "Tesla", year: 2025, category: "EV", horsepower: 570, topSpeed: 217, seating: 5, image: "https://i.imgur.com/aJxdA5M.jpg", featured: true },
  { id: 2, name: "11", brand: "Avatr", year: 2024, category: "EV", horsepower: 578, topSpeed: 200, seating: 5, image: "https://imgur.com/2u1nCXr.jpg", featured: true },
  { id: 3, name: "GN8 First Edition", brand: "GAC", year: 2024, category: "Van", horsepower: 198, topSpeed: 200, seating: 8, image: "https://imgur.com/frvAXKH.jpg" },
  { id: 4, name: "D9", brand: "Denza", year: 2025, category: "E-Van", horsepower: 510, topSpeed: 180, seating: 8, image: "https://imgur.com/ledOTGr.jpg" },
  { id: 5, name: "XIA", brand: "BYD", year: 2025, category: "E-Van", horsepower: 272, topSpeed: 190, seating: 7, image: "https://imgur.com/rKIYDFV.jpg" },
  { id: 6, name: "OPTIQ", brand: "Cadillac", year: 2025, category: "EV", horsepower: 300, topSpeed: 177, seating: 5, image: "https://imgur.com/9hZRRl2.jpg" },
  { id: 7, name: "EV5 Wave Plus", brand: "KIA", year: 2025, category: "EV", horsepower: 308, topSpeed: 185, seating: 5, image: "https://imgur.com/CfIT0zy.jpg" },
  { id: 8, name: "07", brand: "Avatr", year: 2025, category: "EV", horsepower: 590, topSpeed: 200, seating: 5, image: "https://imgur.com/6zejlED.jpg" },
  { id: 9, name: "BZ4X", brand: "Toyota", year: 2025, category: "EV", horsepower: 214, topSpeed: 159, seating: 5, image: "https://imgur.com/YAhNLLm.jpg" },
  { id: 10, name: "i3", brand: "BMW", year: 2025, category: "EV", horsepower: 201, topSpeed: 150, seating: 4, image: "https://imgur.com/e2JZ4NA.jpg" },
  { id: 11, name: "12 Royal Master", brand: "Avatr", year: 2025, category: "EV", horsepower: 578, topSpeed: 220, seating: 5, image: "https://imgur.com/EhfCeM8.jpg" },
  { id: 12, name: "EV5 WAVE GT", brand: "KIA", year: 2025, category: "EV", horsepower: 308, topSpeed: 185, seating: 5, image: "https://imgur.com/INAQGqP.jpg" },
  { id: 13, name: "X9", brand: "XPENG", year: 2025, category: "E-Van", horsepower: 422, topSpeed: 185, seating: 7, image: "https://imgur.com/1UX45Qg.jpg" },
  { id: 14, name: "11 VIP", brand: "Avatr", year: 2025, category: "EV", horsepower: 570, topSpeed: 200, seating: 5, image: "https://imgur.com/d0Fydd2.jpg" },
  { id: 15, name: "EZ6", brand: "Mazda", year: 2025, category: "EV", horsepower: 268, topSpeed: 171, seating: 5, image: "https://imgur.com/ia2JOUl.jpg" },
];

// HeroSection with Mobile Optimization
const HeroSection = () => {
  return (
    <div className="relative h-[14vh] md:h-[14vh] overflow-hidden font-cinzel red-flow-container">
      <div className="absolute inset-0 animate-3d-red-flow bg-[radial-gradient(circle_at_20%_20%,_rgba(255,0,0,1)_0%,_rgba(255,0,0,0)_50%),_radial-gradient(circle_at_80%_80%,_rgba(200,0,0,0.9)_0%,_rgba(200,0,0,0)_50%)] bg-[length:400%_400%]" />
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          OUR COLLECTION
        </h1>
      </div>
    </div>
  );
};

// OurCollection Component with Mobile Optimization
const OurCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const brands = Array.from(new Set(cars.map(car => car.brand)));
  const categories = Array.from(new Set(cars.map(car => car.category)));

  const filteredCars = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "" || car.brand === selectedBrand;
    const matchesCategory = selectedCategory === "" || car.category === selectedCategory;
    return matchesSearch && matchesBrand && matchesCategory;
  });

  return (
    <div className="bg-white pt-12 md:pt-20">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or brand..."
              className="w-full pl-12 pr-4 py-2.5 md:py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm font-nunito"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:flex-row md:items-center md:gap-2 font-nunito">
            <div className="flex items-center gap-2 w-full">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Make:</label>
              <div className="relative w-full">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm font-nunito w-full"
                >
                  <option value="">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Category:</label>
              <div className="relative w-full">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm font-nunito w-full"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 md:hover:scale-105"
            >
              <div className="relative h-56 md:h-64">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-t-lg md:group-hover:scale-110 transition-transform duration-700"
                />
                {car.featured && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>
              <div className="p-4 card-content">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                  {car.brand} {car.name}
                </h3>
                <div className="space-y-1 text-xs md:text-xs text-gray-700">
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span className="font-medium">{car.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">{car.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Horsepower:</span>
                    <span className="font-medium">{car.horsepower} hp</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Top Speed:</span>
                    <span className="font-medium">{car.topSpeed} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Seating:</span>
                    <span className="font-medium">{car.seating} seats</span>
                  </div>
                </div>
                <a
                  href="https://t.me/firstclassautokh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full block text-center bg-black text-white py-1.5 rounded-full hover:bg-neutral-800 transition-colors duration-300 text-xs font-medium"
                >
                  Purchase
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCollection;