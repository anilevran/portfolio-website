export const authReducer = (state = isInLocal(), action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("authed", true);
      return !state;
    case "LOGOUT":
      localStorage.removeItem("authed");
      return !state;
    default:
      return state;
  }
};

const isInLocal = () => {
  if (localStorage.getItem("authed") === null) {
    return false;
  } else if (localStorage.getItem("authed") === "true") {
    return true;
  }
};
