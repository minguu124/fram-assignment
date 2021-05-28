import { counterReducer } from "./counter/counter.slice";
import { usersReducer } from "./users/users.slice";

const rootReducers = {
  counter: counterReducer,
  users: usersReducer
};

export default rootReducers;
