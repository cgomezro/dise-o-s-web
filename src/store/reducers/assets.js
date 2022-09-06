const initialState = {
  loading: true,
  list: [],
};

export default function assetReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ASSETS":
      return {
        loading: false,
        list: action.payload,
      };
    case "CLEAN_ASSETS":
      return {
        loading: false,
        list: state.list.map((item) => {
          delete item.balance;
          return item;
        }),
      };
    default:
      return state;
  }
}
