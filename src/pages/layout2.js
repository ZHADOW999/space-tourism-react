// Layout.js
import React from 'react';
import NavBar from './NavBar';// Adjust the path based on your structure

const Layout = ({ children, backgroundImage }) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          zIndex: -1, // Push background behind other content
        }}
      >
        <div className="flex items-center justify-center h-full">
          {children} {/* This will render the page content */}
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Layout;
