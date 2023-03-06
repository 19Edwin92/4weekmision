import { combineReducers, legacy_createStore as createStore } from "redux";
import todolist from "../modules/todolists";

const reducer = combineReducers({
  todolist,
})

const store = createStore(reducer)

export default store