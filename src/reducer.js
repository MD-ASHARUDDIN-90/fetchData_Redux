import actions from "./action";

const postReducer = (state = [], action) => {
  console.log(action.payload);
  switch (action.type) {
    case actions.FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;
