import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Checker from "./checker";

import { handleReciverParticipants } from "../actions/participants";
class ParticipantList extends Component {

  handleToggle = (field, idx) => () => {
    // const { list } = this.props;

    // list[idx].attended[field] = !list[idx].attended[field];

    // this.setState({ ...this.state, list });
  };

  render() {
    
    const { classes,list } = this.props;
    // const { list = [] } = this.state;

    return (
      <List className={classes.root}>
        {list.length > 0 &&
          list.map(({ image, name, attended }, idx) => (
            <Fragment key={idx}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={image.title} src={image.url} />
                </ListItemAvatar>
  
                <ListItemText
                  primary={name}
                  secondary={
                    <span className={classes.attendence}>
                      <Checker
                        title={"Sacramental?"}
                        onChange={this.handleToggle("sacramental", idx)}
                        checked={attended.sacramental}
                      />
                      <Checker
                        title={"Quorum?"}
                        onChange={this.handleToggle("sundaySchool", idx)}
                        checked={attended.sundaySchool}
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
  }
};

function mapStateToProps({ participants = {} }, props) {
  return {
    list: participants.list ? participants.list: [],
  };
}


const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleReciverParticipants }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ParticipantList));


