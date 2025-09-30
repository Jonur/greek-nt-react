const getTeamNearEvents = (id: number) => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isLocalhost) {
    return `https://www.sofascore.com/api/v1/team/${id}/near-events`;
  }

  return `/api/team-near-events?teamId=${id}`;
};

export default getTeamNearEvents;
