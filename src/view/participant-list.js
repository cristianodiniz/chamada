import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { withRouter } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Checker from "./checker";
import AvatarFullScreen from "./avatar-full-screen";
import LongPress from "react-long";

import {
  handleReciverParticipants,
  handleUpdateAtendence,
  handleCreatePerson
} from "../store/actions/participants";
class ParticipantList extends Component {
  state = {
    openAvatarFullScreen: false,
    personIdSelected: null
  };

  handleToggle = (field, attendance) => () => {
    attendance[field] = !attendance[field];
    this.props.handleUpdateAtendence(attendance);
    // const { list } = this.props;
    // list[idx].attended[field] = !list[idx].attended[field];
    // this.setState({ ...this.state, list });
  };

  handleAvatarFullScreenClose = () => {
    this.setState({
      openAvatarFullScreen: false
    });
  };

  handleAvatarFullScreenShow = personId => () => {
    this.setState({
      openAvatarFullScreen: true,
      personIdSelected: personId
    });
  };

  update() {
    this.props.handleCreatePerson();
  }

  render() {
    const { classes, list } = this.props;
    const { openAvatarFullScreen, personIdSelected } = this.state;

    return (
      <List className={classes.root}>
        <AvatarFullScreen
          handleClose={this.handleAvatarFullScreenClose}
          open={openAvatarFullScreen}
          personId={personIdSelected}
        />
        {list.length > 0 &&
          list.map(({ attendance, firstName, lastName, avatar, id }, idx) => (
            <Fragment key={idx}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar onClick={this.handleAvatarFullScreenShow(id)}>
                  <LongPress
                    time={1000}
                    onLongPress={ ()=> {
                      this.props.history.push('/persons/'+id)
                    }}
                    onPress={() => {
                      this.handleAvatarFullScreenShow(id);
                    }}
                  >
                    <Avatar
                      alt={firstName}
                      src={avatar}
                      className={classes.avatar}
                    />
                  </LongPress>
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
    height: 80
  }
};

function mapStateToProps({ firestore, participants }, { scheduleId }) {
  const { attendances, persons } = firestore.ordered;
  const { search } = participants;
  const list =
    attendances && persons
      ? persons
          .filter(filter => filter.fullName.includes(search))
          .map(it => {
            const filtered = attendances.filter(
              filter =>
                filter.personId === it.id && filter.scheduleId === scheduleId
            );

            if (filtered.length > 0) {
              const { id, quorum, sacramental } = filtered[0];

              return {
                ...it,
                attendance: {
                  id,
                  quorum,
                  sacramental,
                  personId: it.id,
                  scheduleId
                }
              };
            } else {
              return {
                ...it,
                attendance: {
                  quorum: false,
                  sacramental: false,
                  personId: it.id,
                  scheduleId
                }
              };
            }
          })
      : [];

  return {
    list: list
      ? list.sort((a, b) => {
          if (a.lastName > b.lastName) return 1;
          else if (a.lastName < b.lastName) return -1;
          return 0;
        })
      : []
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { handleReciverParticipants, handleUpdateAtendence, handleCreatePerson },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "persons" }, { collection: "attendances" }])
)(withRouter(withStyles(styles)(ParticipantList)));
