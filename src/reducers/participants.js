import { RECIVER_PARTICIPANTS } from "../actions/participants";

export const initialState = {}

export default function participants(state = initialState, action) {
  switch (action.type) {
    case RECIVER_PARTICIPANTS:
      return { ...state, list: action.participants };
    default:
      return state;
  }
}
