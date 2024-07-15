import React, { useEffect } from 'react';

import { TRANSLATIONS } from 'src/constants';
import { useViewCtx } from 'src/hooks';

const Header: React.FC = () => {
  const { menuOpen, setMenuOpen } = useViewCtx();

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen);
  }, [menuOpen]);

  return (
    <header className="w-full flex pt-6 pb-4 px-4 gap-x-3 items-center relative">
      <img className="h-[54px] w-auto" src="img/crest.svg" />
      <h1 className="text-base leading-[18px] max-w-[112px]">{TRANSLATIONS['app.title']}</h1>

      <button
        aria-label={TRANSLATIONS['cta.settings']}
        className="absolute right-4 top-4"
        onClick={() => setMenuOpen(true)}
      >
        <img className="h-5 w-5 text-primary" src="img/cogwheel.svg" />
      </button>
    </header>
  );
};

export default Header;
