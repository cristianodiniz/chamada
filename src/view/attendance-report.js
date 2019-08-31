import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Box from "@material-ui/core/Box";

import AppToolBar from "./app-tool-bar";
import ParticipantList from "./participant-list";
import { handleOnSearchParticipants } from "../store/actions/participants";

class MarkAttendance extends Component {
  render() {
    const {match,handleOnSearchParticipants} = this.props
    const scheduleId =  match ? match.params.scheduleId : null
    return (
      <Box>
        <AppToolBar onSearch ={handleOnSearchParticipants} />
        { scheduleId && <ParticipantList scheduleId={scheduleId} />}
      </Box>
    );
  }
}


function mapStateToProps({ participants = {} }, props) {
  return {
    search: participants.search ? participants.search : ""
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleOnSearchParticipants }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkAttendance);


