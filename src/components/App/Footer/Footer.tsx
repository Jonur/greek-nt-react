import React from 'react';

const Footer: React.FC = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center gap-x-1 pb-3 w-full text-sm px-4">
      <span>&copy;{`${thisYear}`}</span>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Jonur"
        aria-label="Jonur on Github"
        className="underline"
      >
        Jonur
      </a>
    </footer>
  );
};

export default Footer;
