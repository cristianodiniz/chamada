import { getAllParticipants } from "../../services/ChamadaAPI";
import { showLoading, hideLoading } from "react-redux-loading";

import { createErrorMessage } from "./errors";

export const COLLECTION_NAME = "attendances";

export const RECIVER_PARTICIPANTS = "RECIVER_PARTICIPANTS";
export const UPDATE_ATTENDANCE = "UPDATE_ATTENDANCE";

// #region reciverParticipants
export function reciverParticipants(data) {
  return {
    type: RECIVER_PARTICIPANTS,
    participants: data
  };
}

export function handleReciverParticipants(scheduleId, callback = null) {
  return dispatch => {
    getAllParticipants(scheduleId)
      .then(data => {
        dispatch(reciverParticipants(data));
        callback(null, data);
      })
      .catch(e => {
        console.warn("Error in handleReciverParticipants: ", e);
        callback(e, null);
      });
  };
}

// #endregion reciverParticipants

// #region updateAtendence
export const updateAtendence = atendence => {
  return {
    type: RECIVER_PARTICIPANTS,
    atendence
  };
};

export const handleUpdateAtendence = atendence => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    dispatch(showLoading);
    firestore
      .collection(COLLECTION_NAME)
      .doc(atendence.id)
      .update({
        ...atendence
      })
      .then(response => {
        console.log("response", response);
        dispatch(updateAtendence(atendence));
        dispatch(hideLoading);
      })
      .catch(error => {
        dispatch(createErrorMessage(error));
        dispatch(hideLoading);
      });
  };
};

// #endregion updateAtendence
