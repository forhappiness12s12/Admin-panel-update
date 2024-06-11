import React from 'react';

const Header = ({ onLogout, user }) => {
  return (
    <header className="bg-[#1F1F1F] text-white w-full p-4 flex justify-between items-center">
  <h1 className="text-base sm:text-lg md:text-xl font-bold">No Ordinary Clothing Limited</h1>
  {user && (
    <div className="flex items-center">
      <span className="hidden sm:block">Welcome, {user.email}</span>
      <button 
        onClick={onLogout} 
        className="ml-4 px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm bg-[#464545]"
      >
        LOGOUT
      </button>
    </div>
  )}
</header>

  );
};

export default Header;
