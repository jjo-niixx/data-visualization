import actions from "./actions";

const { SET_DATA } = actions;

const INITIAL_STATE = {
  data: [],
};

export default function MainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
