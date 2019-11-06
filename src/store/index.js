import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as todoList } from "./todo-reducer";

import { reducer as details } from "./details-reducer";

let reducer = combineReducers({
  todoList,
  details,
});

export default () => createStore(reducer, composeWithDevTools());