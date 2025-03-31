import React from 'react';
import { Facebook, Send, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="py-12 px-8 text-white"
            style={{ background: 'linear-gradient(to bottom, #A30000, #CC0000)' }}
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
                    <div className="text-gray-200 text-sm leading-relaxed font-normal tracking-wide">
                        <p>First Class Automobiles</p>
                        <p>First Class Service</p>
                        <p>First Class Auto</p>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 tracking-widest font-cinzel text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="/our-collection" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">Models</a>
                        </li>
                        <li>
                            <a href="/#about" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">About Us</a>
                        </li>
                        <li>
                            <a href="/team" className="text-gray-200 hover:text-white transition-colors duration-300 font-normal tracking-wide">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4 tracking-widest font-cinzel text-white">Get in Touch</h4>
                    <div className="text-gray-200 text-sm mb-4 font-normal tracking-wide">
                        <a
                            href="https://g.co/kgs/VpTfwej"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-white transition-colors duration-300"
                        >
                            <p className="leading-relaxed mb-1">#420, Preah Monivong Blvd.</p>
                            <p className="leading-relaxed mb-1">Sangkat Boeung Keng Kang I, Khan Chamkarmorn</p>
                            <p className="leading-relaxed mb-1">Phnom Penh, Cambodia</p>
                        </a>
                        <a
                            href="tel:+85585899599"
                            className="text-gray-200 hover:text-white transition-colors duration-300"
                        >
                            <p className="leading-relaxed">+855 85 899 599</p>
                        </a>
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
    );
};

export default Footer;