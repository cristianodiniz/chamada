import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Checker from "./checker";

import { handleReciverParticipants,handleUpdateAtendence } from "../store/actions/participants";
class ParticipantList extends Component {
  handleToggle = (field, attendance) => () => {
    attendance[field] = !attendance[field]
    this.props.handleUpdateAtendence(attendance)
    // const { list } = this.props;
    // list[idx].attended[field] = !list[idx].attended[field];
    // this.setState({ ...this.state, list });
  };

  render() {
    const { classes, list } = this.props;
    // const { list = [] } = this.state;

    return (
      <List className={classes.root}>
        {list.length > 0 &&
          list.map(({ attendance, firstName, lastName, office, avatar }, idx) => (
            <Fragment key={attendance.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={firstName} src={avatar} className={classes.avatar} />
                </ListItemAvatar>

                <ListItemText
                  primary={`${lastName}, ${firstName}`}
                  secondary={
                    <span className={classes.attendence}>
                      <Checker
                        title={"Sacramental?"}
                        onChange={this.handleToggle("sacramental", attendance)}
                        checked={attendance.sacramental}
                      />
                      <Checker
                        title={"Quorum?"}
                        onChange={this.handleToggle("quorum", attendance)}
                        checked={attendance.quorum}
                      />
                    </span>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
      </List>
    );
  }
}

const styles = {
  root: {
    width: "100%",
    maxWidth: "100%"
  },
  avatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
};

function mapStateToProps(store, { scheduleId }) {
  const { firestore } = store;
  const { attendances, persons } = firestore.ordered;
  
  const list = (attendances && persons) ? persons.map(it => {
    const { id, quorum, sacramental } = attendances.filter(
      filter =>
        filter.person.id === "Pa0hx7hqSG787IpS116p" &&
        filter.schedule.id === scheduleId
    )[0];
    return { ...it, attendance: { id, quorum, sacramental } };
  }): [];

  return {
    list: list ? list : []
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleReciverParticipants, handleUpdateAtendence }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "persons" }, { collection: "attendances" }])
)(withStyles(styles)(ParticipantList));
