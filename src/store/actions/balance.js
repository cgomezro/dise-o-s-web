export const SetBalance = (balance) => async (dispatch) => {
  dispatch({
    type: "SET_BALANCE",
    payload: balance,
  });
};

export const CleanBalance = (balance) => async (dispatch) => {
  dispatch({
    type: "CLEAN_BALANCE",
    payload: balance,
  });
};
