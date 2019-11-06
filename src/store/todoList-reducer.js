export const ADDITEM = "addItem";
export const DELETEITEM = "deleteItem";
export const TOGGLECOMPLETE = "toggleComplete";

export const initialState = [];
// state here is the current count

export function reducer(state = initialState, action = {}) {
  console.log("reducer", state, action);
  switch (action.type) {
    case ADDITEM:
      return [...state, action.payload];
    case DELETEITEM: {
      let id = action.payload.id;
      return state.filter(item => item._id !== id);
    }
    case TOGGLECOMPLETE: {
      let id = action.payload.id;
      return state.map(item =>
        item._id === id
          ? {
              ...item,
              complete: !item.complete
            }
          : item
      );
    }
    default:
      return state;
  }
}

// Action Creators
export function addItem(item) {
  return {
    type: ADDITEM,
    payload: item
  };
}

export function deleteItem(id) {
  return {
    type: DELETEITEM,
    payload: { id }
  };
}

export function toggleComplete(id) {
  return {
    type: TOGGLECOMPLETE,
    payload: { id }
  };
}
