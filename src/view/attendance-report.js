import React, { Component } from "react";

import Box from "@material-ui/core/Box";

import SearchAppBar from "./search-app-bar";
import ParticipantList from "./participant-list";

class MarkAttendance extends Component {
  render() {
    const {match} = this.props
    const scheduleId =  match ? match.params.scheduleId : null
    return (
      <Box>
        <SearchAppBar />
        { scheduleId && <ParticipantList scheduleId={scheduleId} />}
      </Box>
    );
  }
}

export default MarkAttendance;
