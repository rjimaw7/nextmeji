import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <h1 className="text-4xl font-extrabold text-white">mⓔJı</h1>
      <p className="text-2xl font-semibold text-white">codingskills</p>
      <p className="text-xl font-bold text-white">PLAY</p>
    </Link>
  );
};

export default Logo;
