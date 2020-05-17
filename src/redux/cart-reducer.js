const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';

const INITIAL_STATE = {
  hidden: true
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };    
    default:
      return state;
  }
}


export const toggleDropdown = () => ({type: TOGGLE_DROPDOWN});