import { getAllParticipants } from "../services/ChamadaAPI";

export const RECIVER_PARTICIPANTS = "RECIVER_PARTICIPANTS";

export function reciverParticipants(data) {
  return {
    type: RECIVER_PARTICIPANTS,
    participants: data
  };
}

export function handleReciverParticipants() {
  return dispatch => {
    getAllParticipants()
      .then(data => {
        dispatch(reciverParticipants(data));
      })
      .catch(e => {
        console.warn("Error in handleReciverParticipants: ", e);
      });
  };
}
