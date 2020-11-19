// 임의로 설정

import actions from "./actions";
const { DATA, CLICKED } = actions;

const INITIAL_STATE = {
  data: [],
  like: 0,
};

export default function mainReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    case CLICKED:
      return {
        ...state,
        like: state.like + 1,
      };

    default:
      return state;
  }
}
