const getTeamEvents = (id: number, page = 0) => `https://www.sofascore.com/api/v1/team/${id}/events/next/${page}`;

export default getTeamEvents;
