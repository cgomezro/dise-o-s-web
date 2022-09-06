const initialState = {
  loggedin: false,
  user: null,
  token: null,
  sidebar: false,
  loading: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        loggedin: true,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        user: {
          ...state.user,
          profile: action.payload,
        },
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        loggedin: false,
        token: null,
      };
    default:
      return state;
  }
}
