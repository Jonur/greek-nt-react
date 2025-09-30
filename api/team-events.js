export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { teamId, page = 0 } = req.query;

  if (!teamId) {
    res.status(400).json({ error: 'teamId is required' });
    return;
  }

  try {
    const response = await fetch(`https://www.sofascore.com/api/v1/team/${teamId}/events/next/${page}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching team events:', error);
    res.status(500).json({ error: 'Failed to fetch team events' });
  }
}
