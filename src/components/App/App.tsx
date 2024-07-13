import React from 'react';

import basketballGameData from 'src/__fixtures__/data/team.json';
import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import { ApiTeamData } from 'src/types';
import { games } from 'src/utils';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Navigation />

      <div className="px-4 pt-4 pb-6">
        {games(basketballGameData as ApiTeamData).map((game) => {
          const gameDate = new Date(game.startTimestamp * 1000);
          const formattedGameDate = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
          })
            .format(gameDate)
            .split(' ')
            .join(' ');

          return (
            <div key={game.id} className="border-2 border-blue-900 mb-6">
              <h3 className="px-4 py-2 text-white bg-blue-900 flex gap-x-2 items-center">
                <img
                  className="h-6 w-auto"
                  src={`https://api.sofascore.app/api/v1/unique-tournament/${game.tournament.uniqueTournamentId}/image/dark`}
                />
                <span className="text-sm">
                  {game.tournament.name} &ndash; {game.tournament.groupName}
                </span>
              </h3>
              <div className="flex gap-x-2 justify-center py-4">
                <div className="flex gap-x-2">
                  <img className="h-6 w-auto" src={`https://api.sofascore.app/api/v1/team/${game.homeTeam.id}/image`} />
                  <span>{game.homeTeam.name}</span>
                </div>
                <span>&ndash;</span>
                <div className="flex gap-x-2">
                  <img className="h-6 w-auto" src={`https://api.sofascore.app/api/v1/team/${game.awayTeam.id}/image`} />
                  <span>{game.awayTeam.name}</span>
                </div>
              </div>
              <p className="bg-blue-900 text-white text-center text-sm py-1">{formattedGameDate}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
