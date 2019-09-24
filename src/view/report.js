import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import AppToolBar from "./app-tool-bar";

import {
  handleReciverSchedules,
  COLLECTION_NAME
} from "../store/actions/schedules";

class Report extends Component {
  render() {
    return (
      <Box>
        <AppToolBar></AppToolBar>
        <Container>Report</Container>
      </Box>
    );
  }
}

const styles = {};

const months = [
  "January - March",
  "April - June",
  "July - September",
  "October - December"
];

function mapStateToProps({ firestore = {}, schedule }, props) {
  const { ordered } = firestore;
  const { search = "" } = schedule;
  
  return {
    list: ordered.schedules
      ? ordered.schedules
          .filter(filter => filter.date.includes(search))
          .sort((a, b) => {
            if (a.date < b.date) return 1;
            else if (a.date > b.date) return -1;
            return 0;
          })
      : []
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleReciverSchedules }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: COLLECTION_NAME }])
)(withStyles(styles)(Report));
