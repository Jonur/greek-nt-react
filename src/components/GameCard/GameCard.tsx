import c from 'classnames';
import React from 'react';

import { TRANSLATIONS } from 'src/constants';
import { GameStatus, TeamEvent } from 'src/types';
import { getFormattedGameDateData, getGameExternalLink, getTeamImage, getTournamentImage } from 'src/utils';

import TeamDisplay from './TeamDisplay';

type GameCardProps = {
  game: TeamEvent;
};

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { date, time } = getFormattedGameDateData(game.startTimestamp);
  const inProgress = game.status.type === GameStatus.IN_PROGRESS;

  return (
    <div
      role="treeitem"
      className={c('text-sm font-medium bg-white rounded-lg p-4 pb-3', {
        'border border-blue-30': inProgress,
      })}
    >
      <header className="flex gap-x-2 items-center">
        <img
          aria-label={`${game.tournament.name} ${TRANSLATIONS['gameCard.logo']}`}
          className="h-6 w-auto"
          src={getTournamentImage(game.tournament)}
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <span>{game.tournament.name}</span>

        {game.tournament.groupName && (
          <span className="bg-blue-20 rounded-lg px-2 pb-0.5 flex items-center justify-center text-xs">
            {game.tournament.groupName}
          </span>
        )}
      </header>

      <main className="flex gap-x-3 items-center pt-6 pb-4 border-b border-blue-20">
        <div className="flex gap-x-2 font-medium items-center flex-0 max-w-[50%]">
          <img className="h-6 w-auto" src={getTeamImage(game.homeTeam.id)} />
          <TeamDisplay team={game.homeTeam} />
        </div>

        <span>vs</span>

        <div className="flex gap-x-2 font-medium items-center flex-1 max-w-[50%]">
          <img className="h-6 w-auto" src={getTeamImage(game.awayTeam.id)} />
          <TeamDisplay team={game.awayTeam} />
        </div>
      </main>

      <footer className="pt-2 font-normal flex items-center justify-between">
        {inProgress ? (
          <div className="flex items-center pt-0.5 gap-x-1.5 font-medium">
            <span className="bg-blue-30 rounded-md flex items-center px-2 pb-[1px] h-[24px] text-blue-10">
              {TRANSLATIONS['gameCard.live']}
            </span>
            <a
              aria-label={TRANSLATIONS['gameCard.gameDetails']}
              href={getGameExternalLink(game)}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-blue-30 mt-[1px] text-primary"
            >
              {TRANSLATIONS['gameCard.live.link']}
            </a>
          </div>
        ) : (
          <div className="flex items-center pt-0.5 gap-x-3">
            <span>
              <span className="font-medium">{TRANSLATIONS['gameCard.date']}:</span> {date}
            </span>
            <span>
              <span className="font-medium">{TRANSLATIONS['gameCard.time']}:</span> {time}
            </span>
          </div>
        )}

        {!inProgress && (
          <a
            aria-label={TRANSLATIONS['gameCard.gameDetails']}
            href={getGameExternalLink(game)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-6 w-auto" src="img/link.svg" />
          </a>
        )}
      </footer>
    </div>
  );
};

export default GameCard;
