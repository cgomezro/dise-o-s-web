const initialState = {
  loading: true,
  list: [],
};

export default function balanceReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BALANCE":
      return {
        loading: false,
        list: action.payload,
      };
    case "CLEAN_BALANCE": {
      return initialState;
    }
    default:
      return state;
  }
}
