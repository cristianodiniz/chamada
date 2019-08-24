import { getAllSchedules } from "../../services/ChamadaAPI";
import { showLoading, hideLoading } from "react-redux-loading";

import {createErrorMessage} from "./errors"

export const COLLECTION_NAME = "schedules";
// #region CREATE_SCHEDULE
export const CREATE_SCHEDULE = "CREATE_SCHEDULE";
export function createSchedule(schedule) {
  return {
    type: CREATE_SCHEDULE,
    schedule: schedule
  };
}

export const handleCreateSchedule = schedule => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.getCollection(COLLECTION_NAME).add({
      ...schedule,
      createBy: "author name",
      createAt: new Date()
    }).then((response)=>{
      console.log("response",response);
      dispatch(createSchedule(schedule));
    }).catch((error)=>{
      dispatch(createErrorMessage(error));
    })
    
  };
};

// #endregion CREATE_SCHEDULE

// #region CREATE_SCHEDULE
export const SEARCH_SCHEDULES = "SEARCH_SCHEDULES";
export function searchSchedules(searchTerm) {
  return {
    type: SEARCH_SCHEDULES,
    search: searchTerm
  };
}

export function handleOnSearchSchedules(searchTerm) {
  return dispatch => {
    dispatch(showLoading());
    dispatch(searchSchedules(searchTerm));
    dispatch(hideLoading());
  };
}

// #endregion SEARCH_SCHEDULES

// #region RECIVER_SCHEDULES
export const RECIVER_SCHEDULES = "RECIVER_SCHEDULES";
export function reciverSchedules(data) {
  return {
    type: RECIVER_SCHEDULES,
    chedule: data
  };
}

export function handleReciverSchedules(callback = null) {
  return dispatch => {
    dispatch(showLoading());
    getAllSchedules()
      .then(data => {
        dispatch(reciverSchedules(data));
        callback && callback(null, data);
        dispatch(hideLoading());
      })
      .catch(e => {
        console.warn("Error in handleReciverSchedules: ", e);
        callback && callback(e, null);
        dispatch(hideLoading());
      });
  };
}


// #endregion RECIVER_SCHEDULES
