const user = localStorage.getItem("user");
const initialState = {
  user: user ? JSON.parse(user) : null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "SUCCESS": {
      const newState = { user: action.data };
      return newState;
    }
    case "FAIL": {
      const newState = { user: null };
      console.log("FAIL Console");
      alert(action.errorMessage);
      return newState;
    }
    default:
      return state;
  }
}
