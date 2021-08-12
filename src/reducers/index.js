import { combineReducers } from "redux";
import { treeNodeReducer } from './treeNodeReducer';

const rootReducer = combineReducers({
  treeNode: treeNodeReducer
})


export default rootReducer;