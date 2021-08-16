import { createSlice } from "@reduxjs/toolkit";

var isInLocalStorage = (state) => {
  let objet = {
    value: true,
  };
  let objef = {
    value: false,
  };
  console.log(localStorage.getItem("userAuthenticated"));
  if (
    localStorage.getItem("userAuthenticated") === null ||
    localStorage.getItem("userAuthenticated") === JSON.stringify(objef)
  ) {
    console.log(localStorage.getItem("userAuthenticated"));
    localStorage.setItem("userAuthenticated", JSON.stringify(objef));
    return false;
  } else if (
    localStorage.getItem("userAuthenticated") === JSON.stringify(objet)
  ) {
    localStorage.setItem("userAuthenticated", JSON.stringify(objet));
    return true;
  } else {
    console.log("Local storage search failed");
    return false;
  }
};

export const auth = createSlice({
  name: "auth",
  initialState: {
    value: isInLocalStorage(),
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true;
      localStorage.setItem("userAuthenticated", state.value);
    },
    logout: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
      localStorage.removeItem("userAuthenticated");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = auth.actions;

export default auth.reducer;
