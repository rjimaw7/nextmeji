import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto p-5">
        <Link href="/">
          <h2 className="primary-blue cursor-pointer text-center text-2xl font-bold md:text-start">My Shopping List</h2>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
