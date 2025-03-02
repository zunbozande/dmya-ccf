import postgres from 'postgres';
import { teams, players } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedTeams() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS teams (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      owner_name VARCHAR(255) NOT NULL,
      matches_played INT DEFAULT 0,
      matches_won INT DEFAULT 0,
      matches_lost INT DEFAULT 0,
      matches_drawn INT DEFAULT 0,
      goal_scored INT DEFAULT 0,
      goal_conceded INT DEFAULT 0,
      goal_difference INT GENERATED ALWAYS AS (goal_scored - goal_conceded) STORED,
      points INT GENERATED ALWAYS AS (matches_won * 3 + matches_drawn) STORED
    );
  `;

  const insertedTeams = await Promise.all(
    teams.map(
      (team) => sql`
        INSERT INTO teams (id, name, description, owner_name, matches_played, matches_won, matches_lost, matches_drawn, goal_scored, goal_conceded)
        VALUES (
          ${team.id}, ${team.name}, ${team.description}, ${team.owner_name}, 
          ${team.matches_played}, ${team.matches_won}, ${team.matches_lost}, ${team.matches_drawn}, 
          ${team.goal_scored}, ${team.goal_conceded}
        )
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedTeams;
}

async function seedPlayers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await sql`
    CREATE TABLE IF NOT EXISTS players (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      team_id UUID REFERENCES teams(id) ON DELETE SET NULL,
      name VARCHAR(255) NOT NULL,
      height DECIMAL(4,2),
      weight DECIMAL(5,2),
      primary_position VARCHAR(10),
      secondary_position VARCHAR(10),
      shots INT DEFAULT 0,
      shots_ontarget INT DEFAULT 0,
      goals INT DEFAULT 0,
      own_goals INT DEFAULT 0,
      assists INT DEFAULT 0,
      passes_completed INT DEFAULT 0,
      cleansheet INT DEFAULT 0,
      tackle INT DEFAULT 0,
      yellow_card INT DEFAULT 0,
      red_card INT DEFAULT 0,
      foul INT DEFAULT 0,
      isGoalKeeper BOOLEAN DEFAULT false,
      isCaptain BOOLEAN DEFAULT false
    );
  `;

  const insertedPlayers = await Promise.all(
    players.map(
      (player) => sql`
        INSERT INTO players (id, team_id, name, height, weight, primary_position, secondary_position, shots, shots_ontarget, goals, own_goals, assists, passes_completed, cleansheet, tackle, yellow_card, red_card, foul, isGoalKeeper, isCaptain)
        VALUES (
          ${player.id}, ${player.team_id}, ${player.name}, ${player.height}, ${player.weight}, 
          ${player.primary_position}, ${player.secondary_position}, ${player.shots}, ${player.shots_ontarget}, 
          ${player.goals}, ${player.own_goals}, ${player.assists}, ${player.passes_completed}, 
          ${player.cleansheet}, ${player.tackle}, ${player.yellow_card}, ${player.red_card}, ${player.foul}, 
          ${player.isGoalKeeper}, ${player.isCaptain}
        )
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedPlayers;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [seedTeams(), seedPlayers()]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
