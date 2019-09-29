import { createStore } from "redux";
import rootReducer from "./reducers";

/*export function configureStore(initialState) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore(initialState);
*/
const store = createStore(rootReducer);

export default store;
