import React from 'react';

const Header: React.FC = () => (
  <header className="w-full flex py-4 px-4 gap-x-3 items-center">
    <img className="h-[54px] w-auto" src="img/crest.svg" />
    <h1 className="text-base leading-[18px] max-w-[112px]">Greece national teams games</h1>
  </header>
);

export default Header;
