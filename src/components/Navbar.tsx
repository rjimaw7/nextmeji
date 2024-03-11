/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import Logo from './Logo';

const Navbar = () => {
  return (
    <header className="border-b-1 container mx-auto cursor-pointer border border-x-0 border-t-0 border-black p-5">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
