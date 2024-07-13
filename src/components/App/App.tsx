import React from 'react';

import GameCard from 'src/components/GameCard';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import SkeletonLoader from 'src/components/SkeletonLoader';
import { TRANSLATIONS } from 'src/constants';
import { useDataCtx } from 'src/hooks';
import { FetchingStatus } from 'src/types';

const App: React.FC = () => {
  const { status, teamEvents } = useDataCtx();

  return (
    <>
      <Header />

      <Navigation />

      {status === FetchingStatus.LOADING && <SkeletonLoader />}

      {status === FetchingStatus.FAILURE && <div className="flex px-4 py-8">{TRANSLATIONS.error}</div>}

      {status === FetchingStatus.SUCCESS && Boolean(teamEvents.length) && (
        <div role="tree" className="px-4 pt-4 pb-6 flex flex-col gap-y-3">
          {teamEvents.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
