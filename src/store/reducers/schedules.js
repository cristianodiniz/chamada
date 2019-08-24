import { RECIVER_SCHEDULES, SEARCH_SCHEDULES } from "../actions/schedules";

export const initialState = { list: [], search: "", searchResult: [] };

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
    }
    default:
      return state;
  }
}