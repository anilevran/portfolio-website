import { createStore } from "redux";
import authReducer from "./features/auth.js";

const store = createStore(
  authReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let loadState = () => {
  console.log("LoadState");
  try {
    let serializedState = localStorage.getItem("userAuthenticated");

    if (serializedState === null) {
      return this.initializeState();
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return this.initializeState();
  }
};

let saveState = (state) => {
  try {
    let serializedState = JSON.stringify(state);
    localStorage.setItem("userAuthenticated", serializedState);
  } catch (err) {}
};
store.subscribe(() => {
  //this is just a function that saves state to localStorage
  saveState(store.getState());
  loadState();
});

export default store;
