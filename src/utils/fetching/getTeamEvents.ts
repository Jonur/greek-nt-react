const getTeamEvents = (id: number, page = 0) => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  if (isLocalhost) {
    return `https://www.sofascore.com/api/v1/team/${id}/events/next/${page}`;
  }

  return `/api/team-events?teamId=${id}&page=${page}`;
};

export default getTeamEvents;
