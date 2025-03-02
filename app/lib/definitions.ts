export type Team = {
  id: string;
  name: string;
  description?: string;
  owner_name: string;
  matches_played?: number;
  matches_won?: number;
  matches_lost?: number;
  matches_drawn?: number;
  points?: number;
  goal_scored?: number;
  goal_conceded?: number;
  goal_difference?: number;
}

export type TeamField = {
  id: string;
  name: string;
  owner_name: string;
}

export type Player = {
 id: string;
 team_id: string;
 name: string;
 height: number;
 weight: number;
 primary_postion: string;
 secondary_postion: string;
 shots?: number;
 shots_ontarget?: number;
 goals?: number;
 own_goals?: number;
 assists?: number;
 passes_completed?: number;
 cleansheet?: number;
 tackle?: number;
 yellow_card?: number;
 red_card?: number;
 foul?: number;
 isGoalKeeper?: boolean;
 isCaptain?: boolean;
}