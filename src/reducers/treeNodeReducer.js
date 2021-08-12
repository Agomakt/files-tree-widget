import { makeUpdate } from "../utils";

export const treeNodeReducer = (state = [], action) => {
  switch (action.type) {
    case 'INITIAL_LOAD':
      return [action.payload];

    case 'OPEN_AND_LOAD':

      const transformData = () => {
        let newState = [...state]
        makeUpdate(newState, action.payload.children);
        return newState
      }
      return transformData();

      default: 
        return state;
  }

}