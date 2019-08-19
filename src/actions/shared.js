import { showLoading, hideLoading } from "react-redux-loading";

import { getAllParticipants } from "../services/ChamadaAPI";
import { reciverParticipants } from "./participants";

export function handlerInitialData() {
  return dispatch => {
    dispatch(showLoading());
    getAllParticipants()
      .then(participants => {
        dispatch(reciverParticipants(participants));
        // dispatch(
        //   handleChangeFiltersPost({
        //     categorySelected: categories[0].name,
        //     order: "Votes Decrescent",
        //     search: ""
        //   })
        // );
        dispatch(hideLoading());
      })
      .catch(e => {
        console.log("getAllParticipants ", e);
        dispatch(hideLoading());
      });
  };
}
