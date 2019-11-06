export const TOGGLEDETAILS = "toggleDetails";

export const initialState = {
  details: {},
  showDetails: false,
};
// state here is the current count

export function reducer(state = initialState, action = {}) {
  console.log("reducer", state, action);
  switch (action.type) {
    case TOGGLEDETAILS:
      let item = action.payload;
        return {
          details: item || {},
          showDetails: !!item,
        };
    default:
      return state;
  }
}

// Action Creators
export function toggleDetails(item) {

  return {
    type: TOGGLEDETAILS,
    payload: item,
  };
}


