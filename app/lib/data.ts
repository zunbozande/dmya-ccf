import postgres from 'postgres';
import TeamField from './definitions';
export async function fetchTeams() {
  try {
    const teams = await sql<TeamField[]>`
    SELECT
      id,
      name,
      owner_name
    FROM teams
    ORDER BY name ASC
    `;
    return teams;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all teams.');
  }
}