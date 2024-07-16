import React from 'react';

import { useWindowDimensions } from 'src/hooks';
import { Team } from 'src/types';

type TeamDisplayProps = {
  team: Team;
};

const TeamDisplay: React.FC<TeamDisplayProps> = ({ team }) => {
  const { onLargeScreen } = useWindowDimensions();

  const isDoubleTeam = team.name.includes('/');
  const shouldDisplayAsColumn = isDoubleTeam && !onLargeScreen();

  return shouldDisplayAsColumn ? (
    <div className="flex flex-col whitespace-nowrap font-medium">
      {team.name.split('/').map((team) => (
        <span key={team}>{team.trim()}</span>
      ))}
    </div>
  ) : (
    <span>{team.name}</span>
  );
};

export default TeamDisplay;
