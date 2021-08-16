import { combineReducers } from "redux";
import respositoriesReducer from "./repositories-reducer";

const reducers = combineReducers({
  repositories: respositoriesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;