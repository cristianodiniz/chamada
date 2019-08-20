import React, { Component } from "react";

import Box from "@material-ui/core/Box";

import SearchAppBar from "./search-app-bar";
import Schedules from "./schedules";

class SchedulesView extends Component {
  render() {
    return (
      <Box>
        <SearchAppBar />
        <Schedules />
      </Box>
    );
  }
}

export default SchedulesView;
