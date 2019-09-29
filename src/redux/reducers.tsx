// import { combineReducers } from "redux";
import { Action, CHANGE_SECTION } from "./actions";

export interface appState {
  selectedSection: number;
}

export const initialState = {
  selectedSection: 1
};

function rootReducer(state: appState = initialState, action: Action) {
  switch (action.type) {
    case CHANGE_SECTION:
      const sectionID = action.payload;
      return { ...state, selectedSection: sectionID };

    default:
      return state;
  }
}

export default rootReducer;
