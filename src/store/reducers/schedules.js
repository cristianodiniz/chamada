import { RECIVER_SCHEDULES, SEARCH_SCHEDULES, CREATE_SCHEDULE } from "../actions/schedules";

export const initialState = { dates: [], search: "", searchResult: [] };

export default function Schedules(state = initialState, action) {
  switch (action.type) {
    case RECIVER_SCHEDULES:
      return {
        ...state,
        dates: action.dates,
        search: "",
        list: action.dates
      };
    case SEARCH_SCHEDULES: {
      const { search } = action;
      const { dates } = state;
      const list = dates
        ? dates.filter(it => it.date.includes(search))
        : dates;
      return {
        ...state,
        search,
        list
      };
    };
    case CREATE_SCHEDULE: {
      
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
