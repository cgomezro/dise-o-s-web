export const SetAssets = (list) => async (dispatch) => {
  dispatch({
    type: "SET_ASSETS",
    payload: list,
  });
};

export const CleanAssets = (list) => async (dispatch) => {
  dispatch({
    type: "CLEAN_ASSETS",
    payload: list,
  });
};
