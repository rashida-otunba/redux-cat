const initialState = {
  cats: {
    1: {
      name: "Taco",
      activity: "Sleepy",
    },
  },
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ACTION_ADD_CAT": {
      // when it sees action_add_cat it knows to do something else
      //add payload and return the new state
      const {name,activity}=action.payload; 
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
        return {
            cats: {
                ...state.cats,
                [id]: {name,activity}
            }
        }
    }
    default: 
    return state; 
  }


};



