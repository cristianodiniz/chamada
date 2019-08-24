import { getAllSchedules } from "../../services/ChamadaAPI";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECIVER_SCHEDULES = "RECIVER_SCHEDULES";
export const SEARCH_SCHEDULES = "SEARCH_SCHEDULES";

export function reciverSchedules(data) {
  return {
    type: RECIVER_SCHEDULES,
    dates: data
  };
}

export function searchSchedules(searchTerm) {
  return {
    type: SEARCH_SCHEDULES,
    search: searchTerm
  };
}

export function handleReciverSchedules(callback = null) {
  return dispatch => {
    dispatch(showLoading());
    getAllSchedules()
      .then(data => {
        dispatch(reciverSchedules(data));
        callback && callback(null,data);
        dispatch(hideLoading());
      })
      .catch(e => {
        console.warn("Error in handleReciverSchedules: ", e);
        callback && callback(e,null);
        dispatch(hideLoading());
      });
  };
}

export function handleOnSearchSchedules(searchTerm) {
  return dispatch => {
    dispatch(showLoading());
    dispatch(searchSchedules(searchTerm));
    dispatch(hideLoading());
  };
}

