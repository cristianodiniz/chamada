import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

import {
  handleReciverSchedules,
  COLLECTION_NAME
} from "../store/actions/schedules";

class Schedules extends Component {
  render() {
    const { classes, list } = this.props;
    return (
      <Fragment>
        <List className={classes.root}>
          {list.length > 0 &&
            list.map(({ date, status, id }, idx) => (
              <Fragment key={idx}>
                <Link
                  to={`/schedule/${id}/attendance`}
                  className={classes.link}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemText primary={date} secondary={status} />
                    <ListItemSecondaryAction>
                      <KeyboardArrowRightIcon />
                    </ListItemSecondaryAction>
                  </ListItem>
                </Link>
                <Divider component="li" />
              </Fragment>
            ))}
        </List>
      </Fragment>
    );
  }
}

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%"
  },
  link: {
    backgroudColor: "red",
    "a:hover": {
      backgroudColor: "blue"
    }
  }
};

function mapStateToProps({ firestore = {} }, props) {
  const { ordered } = firestore;
  return {
    list: ordered.schedules
      ? ordered.schedules.sort((a, b) => {
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
)(withStyles(styles)(Schedules));
