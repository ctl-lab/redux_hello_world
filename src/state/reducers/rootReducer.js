import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SOMETHING_FROM_APP_COMPONENT":
      return {
        ...state,
        coolStuffFromApp: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
