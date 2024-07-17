import React from 'react';

import { TRANSLATIONS } from 'src/constants';

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="pb-3 w-full text-sm px-4 flex flex-col gap-y-2 items-center">
      <span>All event times are in Europe/London timezone.</span>
      <div className="flex items-center justify-center gap-x-1">
        <span>&copy;{`${thisYear}`}</span>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Jonur"
          aria-label={TRANSLATIONS['footer.ariaLabel']}
          className="underline"
        >
          {TRANSLATIONS['footer.title']}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
