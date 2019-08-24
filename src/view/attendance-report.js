import React, { Component } from "react";

import Box from "@material-ui/core/Box";

import SearchAppBar from "./search-app-bar";
import ParticipantList from "./participant-list";

class MarkAttendance extends Component {
  render() {
    const {match} = this.props
    return (
      <Box>
        <SearchAppBar />
        <ParticipantList scheduleId={match.params.scheduleId} />
      </Box>
    );
  }
}

export default MarkAttendance;
