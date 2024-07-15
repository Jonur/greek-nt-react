import React from 'react';

import GameCard from 'src/components/GameCard';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import SkeletonLoader from 'src/components/SkeletonLoader';
import { TRANSLATIONS } from 'src/constants';
import { useDataCtx, useViewCtx } from 'src/hooks';
import { FetchingStatus } from 'src/types';

import Footer from './Footer';
import Settings from './Settings';

const App: React.FC = () => {
  const { menuOpen } = useViewCtx();
  const { status, teamEvents } = useDataCtx();

  return (
    <div className="max-w-[800px] flex flex-col mx-auto">
      <Header />

      {menuOpen && <Settings />}

      <Navigation />

      {status === FetchingStatus.LOADING && <SkeletonLoader />}

      {status === FetchingStatus.FAILURE && <div className="flex px-4 py-8">{TRANSLATIONS.error}</div>}

      {status === FetchingStatus.SUCCESS && Boolean(teamEvents.length) && (
        <main role="tree" className="px-4 pt-4 pb-6 flex flex-col gap-y-3">
          {teamEvents.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;
