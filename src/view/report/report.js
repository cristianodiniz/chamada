import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import Box from "@material-ui/core/Box";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { withStyles } from "@material-ui/core/styles";

import AppToolBar from "../common/app-tool-bar";
import AttendanceReportItem from "./attendance-report-item";

import { handleReciverSchedules } from "../../store/actions/schedules";

class Report extends Component {

  render() {
    const { rows, columns, classes } = this.props;

    return (
      <Box>
        <AppToolBar title={"Attendance report by Pernon"}></AppToolBar>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                {columns.map((col, idx) =>
                  idx === 0 ? (
                    <TableCell key={`col-${idx}`} component="th" scope="row">
                      {col}{" "}
                    </TableCell>
                  ) : (
                    <TableCell key={`col-${idx}`} component="th" scope="row">
                      <AttendanceReportItem
                        title={col}
                        subTitle1="S"
                        subTitle2="Q"
                      />
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={`row-${idx}`} >
                  {row.map((col,idx2) =>
                    typeof col === "string" ? (
                      <TableCell key={`col-data-${idx2}`}>{col}</TableCell>
                    ) : (
                      <TableCell key={`col-data-${idx2}`} align="center">
                        <AttendanceReportItem
                          subTitle1={col.sacramental ? "A" : "-"}
                          subTitle2={col.quorum ? "A" : "-"}
                        />
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    );
  }
}

const styles = {
  content: {
    marginTop: 8
  },
  paper: {
    marginTop: 3,
    width: "100%",
    overflowX: "auto",
    marginBottom: 2
  },
  table: {
    minWidth: 650
  }
};

// const months = [
//   "January - March",
//   "April - June",
//   "July - September",
//   "October - December"
// ];

function mapStateToProps({ firestore }) {
  const { attendances, persons, schedules } = firestore.ordered;
  let columns = [];
  let rows = [];
  if (attendances && persons && schedules) {
    columns.push("Name");
    const dates = schedules.map(it => it.date);
    columns = columns.concat(dates);
    persons.forEach(person => {
      const row = [];
      row.push(person.lastName + " " + person.firstName);
      schedules.forEach(schedule => {
        const attendance = attendances.find(
          fil => fil.personId === person.id && fil.scheduleId === schedule.id
        );
        row.push(
          attendance ? attendance : { sacramental: false, quorum: false }
        );
      });
      rows.push(row);
      console.log(row);
    });
  }

  return {
    columns,
    rows
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleReciverSchedules }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    { collection: "persons" },
    { collection: "attendances" },
    { collection: "schedules" }
  ])
)(withStyles(styles)(Report));
