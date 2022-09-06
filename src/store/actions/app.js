export const toggleSidebar = () => async (dispatch) => {
  dispatch({
    type: "TOGGLE_SIDEBAR",
  });
};
export const setAuthToken = (token) => async (dispatch) => {
  localStorage.setItem("token", token);
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
};
export const setUser = (user) => async (dispatch) => {
  dispatch({
    type: "SET_USER",
    payload: user,
  });
};
export const RestoreUser = (user, token) => async (dispatch) => {
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
  dispatch({
    type: "SET_USER",
    payload: user,
  });
};
export const Logout = (token) => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: "LOGOUT",
  });
};
export const updateProfile = (profile) => async (dispatch) => {
  dispatch({
    type: "UPDATE_PROFILE",
    payload: profile,
  });
};
export const SetLoading = (is_loading) => async (dispatch) => {
  dispatch({
    type: "SET_LOADING",
    payload: is_loading,
  });
};
