import React from 'react';

import basketballGameData from 'src/__fixtures__/data/team.json';
import GameCard from 'src/components/GameCard';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import { ApiTeamData } from 'src/types';
import { games } from 'src/utils';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Navigation />

      <div role="tree" className="px-4 pt-4 pb-6 flex flex-col gap-y-3">
        {games(basketballGameData as ApiTeamData).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default App;
