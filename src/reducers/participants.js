import { RECIVER_PARTICIPANTS } from "../actions/participants";

export default function participants(state = {}, action) {
  switch (action.type) {
    case RECIVER_PARTICIPANTS:
      return { ...state, ...action.participants };
    default:
      return state;
  }
}
