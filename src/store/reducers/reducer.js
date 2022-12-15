import counterReducer from "./counter.reducer";
import phoneReducer from "./phone.reducer";
import todoReducer from "./todo.reducer";
import { combineReducers } from "redux";

let reducer = combineReducers({
  counter: counterReducer,
  phone: phoneReducer,
  todo: todoReducer
});

export default reducer;
