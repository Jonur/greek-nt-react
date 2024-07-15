import React from 'react';

import { Team } from 'src/types';

type TeamDisplayProps = {
  team: Team;
};

const TeamDisplay: React.FC<TeamDisplayProps> = ({ team }) => {
  return team.name.includes('/') ? (
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
