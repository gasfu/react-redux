const SHOW_TEAMS = "SHOW_TEAMS";
const CLEAN_TEAMS = "CLEAN_TEAMS";

export const showTeams =  (teams) => {

	return {		
		type: SHOW_TEAMS,
		payload: teams  
	};

}

export const cleanTeams =  () => {

	return {		
		type: CLEAN_TEAMS 
	};

}