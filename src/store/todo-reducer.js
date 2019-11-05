export const ADDITEM = 'additem';
export const DELETEITEM = 'deleteitem';
export const SAVEITEM = 'saveitem';
export const TOGGLECOMPLETE = 'togglecomplete';
export const TOGGLEDETAILS = 'toggledetails';

export const initialState = { count: 0 };
// state here is the current count

export function reducer(state = initialState, action = {}) {
  console.log('reducer', state, action);
  switch(action.type) {
    case ADDITEM:
      return { state.item + 1 };
    case DELETEITEM:
      return { count: state.count - 1 };
    case SAVEITEM:
      return initialState;
    case TOGGLECOMPLETE:
      return initialState;
    case TOGGLEDETAILS:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

// Action Creators
export function additem() {
  return { type: ADDITEM };
}

export function deleteitem() {
  return { type: DELETEITEM };
}

export function saveitem() {
  return { type: RESET };
}

export function togglecomplete() {
  return { type: RESET };
}

export function toggledetails(number) {
  return {
    type: 'ADD',
    payload: number,
  };
}