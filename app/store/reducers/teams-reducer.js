const initialState = { teams: null };

const reduce = (state = initialState, action = {}) => {
  switch (action.type) {
  	case 'SHOW_TEAMS':
  	  return Object.assign({}, state, { teams: action.payload });

  	  case 'CLEAN_TEAMS':
  	  return Object.assign({}, state, { teams: null });

    default:
      return state;
  }
}

export default reduce;