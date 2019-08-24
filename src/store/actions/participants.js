import { getAllParticipants } from "../../services/ChamadaAPI";

export const RECIVER_PARTICIPANTS = "RECIVER_PARTICIPANTS";

export function reciverParticipants(data) {
  return {
    type: RECIVER_PARTICIPANTS,
    participants: data
  };
}

export function handleReciverParticipants(scheduleId,callback = null) {
  return dispatch => {
    getAllParticipants(scheduleId)
      .then(data => {
        dispatch(reciverParticipants(data));
        callback(null,data)
      })
      .catch(e => {
        console.warn("Error in handleReciverParticipants: ", e);
        callback(e,null)
      });
  };
}
