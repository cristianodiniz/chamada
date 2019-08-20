import { RECIVER_SCHEDULES } from "../actions/schedules";

export const initialState = {}

export default function Schedules(state = initialState, action) {
  switch (action.type) {
    case RECIVER_SCHEDULES:
      return { ...state, list: action.dates };
    default:
      return state;
  }
}
