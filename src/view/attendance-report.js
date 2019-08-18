
import React, { Component } from "react";

import Box from "@material-ui/core/Box";

import SearchAppBar from './search-app-bar';
import ParticipantList from './participant-list';

class MarkAttendance extends Component {
  render() {
    return (
      <Box>
        <SearchAppBar />
      
            <ParticipantList></ParticipantList>
    
      </Box>
    );
  }
}

export default MarkAttendance;


