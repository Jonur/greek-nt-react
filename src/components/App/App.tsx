import React from 'react';

import GameCard from 'src/components/GameCard';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import SkeletonLoader from 'src/components/SkeletonLoader';
import { useDataCtx } from 'src/hooks';
import { FetchingStatus } from 'src/types';
import { games } from 'src/utils';

const App: React.FC = () => {
  const { status, gameData } = useDataCtx();

  return (
    <>
      <Header />

      <Navigation />

      {status === FetchingStatus.LOADING && <SkeletonLoader />}

      {status === FetchingStatus.FAILURE && <div>Something went wrong!</div>}

      {status === FetchingStatus.SUCCESS && gameData !== null && (
        <div role="tree" className="px-4 pt-4 pb-6 flex flex-col gap-y-3">
          {games(gameData).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </>
  );
};

export default App;
