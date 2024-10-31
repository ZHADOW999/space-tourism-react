// BackgroundWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function BackgroundWrapper({ children }) {
  const location = useLocation();

  // Determine background image based on route
  let backgroundUrl = '';
  if (location.pathname === '/') {
    backgroundUrl = './starter-code/assets/home/background-home-desktop.jpg';
  } else if (location.pathname === '/crew') {
    backgroundUrl = './starter-code/assets/destination/background-destination-desktop.jpg';
    
  }else if (location.pathname === '/crew') {
    backgroundUrl = './starter-code/assets/crew/background-crew-desktop.jpg';
  } 
  else if (location.pathname === '/technology') {
    backgroundUrl = './starter-code/assets/technology/background-technology-desktop.jpg';
  }

  return (
    <div className="relative min-h-screen">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>

      {/* Content layer */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

export default BackgroundWrapper;
