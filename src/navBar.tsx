import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTelegram, FaMapMarkerAlt } from 'react-icons/fa';

const NavigationBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      setHeroHeight(heroElement.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      if (currentScrollY > heroHeight) {
        setIsScrolledPastHero(true);
      } else {
        setIsScrolledPastHero(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroHeight, lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`font-cinzel fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 transition-all duration-300 bg-white text-black shadow-md h-16 sm:h-20 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Left Section: Navigation Links (Desktop) or Menu Button (Mobile) */}
      <div className="flex items-center">
        {/* Custom Mobile Menu Button */}
        <div className="sm:hidden mr-2">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45' : ''
              }`}
            >
              <span
                className={`w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'absolute rotate-90 scale-125' : ''
                }`}
              ></span>
              <span
                className={`w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-1.5 h-1.5 bg-black rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'absolute -rotate-90 scale-125' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
        {/* Navigation Links (Desktop Only) */}
        <div className="hidden sm:flex flex-1 justify-end">
          <div className="flex gap-8 font-bold text-sm tracking-widest">
            <a href="/#about" className="hover:text-neutral-500">About</a>
            <a href="/our-collection" className="hover:text-neutral-500">Models</a>
            <a href="/team" className="hover:text-neutral-500">Contact</a>
          </div>
        </div>
      </div>

      {/* Center Section: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img
          src="https://imgur.com/3ecMlRY.png"
          alt="First Class Auto"
          className={`h-12 sm:h-14 transition-all duration-300 ${
            isHome && !isScrolledPastHero
              ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]'
              : 'drop-shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_0_35px_rgba(0,0,0,0.3)]'
          }`}
        />
      </div>

      {/* Right Section: Social Icons (Desktop Only) */}
      <div className="hidden sm:flex items-center justify-end flex-1">
        <div className="flex gap-6">
          <a
            href="https://g.co/kgs/VpTfwej"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            <FaMapMarkerAlt size={20} />
          </a>
          <a
            href="https://t.me/firstclassautokh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            <FaTelegram size={20} />
          </a>
          <a
            href="https://www.facebook.com/firstclassautokh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.youtube.com/channel/UClxGxfsPhbzeLAMn6RyIdvg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      {/* Mobile Menu (Visible when button is clicked) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 sm:hidden">
          <div className="flex flex-col gap-4 font-bold text-sm tracking-widest">
            <a href="/#about" className="hover:text-neutral-500" onClick={toggleMenu}>About</a>
            <a href="/our-collection" className="hover:text-neutral-500" onClick={toggleMenu}>Models</a>
            <a href="/team" className="hover:text-neutral-500" onClick={toggleMenu}>Contact</a>
          </div>
          <div className="flex gap-6 justify-center mt-4">
            <a
              href="https://g.co/kgs/VpTfwej"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-500"
            >
              <FaMapMarkerAlt size={20} />
            </a>
            <a
              href="https://t.me/firstclassautokh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-500"
            >
              <FaTelegram size={20} />
            </a>
            <a
              href="https://www.facebook.com/firstclassautokh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-500"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/UClxGxfsPhbzeLAMn6RyIdvg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-500"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;