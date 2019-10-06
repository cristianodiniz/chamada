import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
// import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from "@material-ui/pickers";

import AppToolBar from "../common/app-tool-bar";
import { handleOnSearchSchedules } from "../../store/actions/schedules";

class SchedulesView extends Component {
  render() {
    return (
      <Box>
        <AppToolBar />
        <form>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            // value={selectedDate}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
          <TextField
            id="filled-name"
            label="Name"
            // className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin="normal"
            variant="filled"
          />
        </form>
      </Box>
    );
  }
}

function mapStateToProps({ schedule = {} }, props) {
  return {
    search: schedule.search ? schedule.search : ""
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleOnSearchSchedules }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchedulesView);
