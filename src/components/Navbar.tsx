/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { Search } from 'lucide-react';

import useGlobalStore from '@/shared/zustand/globalStore';

import Logo from './Logo';
import { Input } from './ui/input';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useGlobalStore();

  return (
    <header className="border-b-1 container mx-auto flex cursor-pointer flex-col items-center justify-between gap-4 border border-x-0 border-t-0 border-black p-5 md:flex-row md:gap-0">
      <div className="flex items-center  gap-2">
        <Logo />
      </div>
      <div className="relative flex items-center gap-2">
        <Input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Users"
          className="w-full pr-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2" />
      </div>
    </header>
  );
};

export default Navbar;
