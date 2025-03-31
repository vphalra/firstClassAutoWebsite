import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './navBar'; // Ensure this matches the exact filename (case-sensitive)
import Home from './home';
import OurCollection from './collections';
import TeamPage from './team';
import Footer from './footer';

function App() {
  console.log("App rendered with NavigationBar from ./navBar"); // Debugging log
  return (
    <div className="min-h-screen bg-neutral-50">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-collection" element={<OurCollection />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;