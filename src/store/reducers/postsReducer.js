import { FETCH_COMPETITIONS, FETCH_MATCHES, FETCH_TEAMS, FETCH_TEAM } from "../types";

const initPostState = {
  fetchCompetitions: [],
  fetchMatches: [],
  fetchTeams: [],
  fetchTeam: [],
}

export default function postsReducer (state = initPostState, action) {
  switch (action.type) {
    case FETCH_COMPETITIONS:
      return {
        ...state, 
        fetchCompetitions: [...action.payload]
      }
    case FETCH_MATCHES:
      return {
        ...state,
        fetchMatches: [...action.payload]
      }
    case FETCH_TEAMS:
      return {
        ...state,
        fetchTeams: [...action.payload]
      }
    case FETCH_TEAM:
      return {
        ...state,
        fetchTeam: [...action.payload]
      }
    default: 
      return state
  }
}