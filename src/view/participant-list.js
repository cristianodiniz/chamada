import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Checker from "./checker";

class ParticipantList extends Component {
  state = {
    list: [
      {
        image: {
          url: "http://lorempixel.com/250/250/people?1=csd",
          title: "Remy Sharp"
        },
        name: "Nina Ramos",
        attended: {
          sacramental: true,
          sundaySchool: true
        },
        date: "2019-07-21"
      },
      {
        image: {
          url: "http://lorempixel.com/250/250/people?1=98989",
          title: "Remy Sharp"
        },
        name: "Avery Vasquez",
        attended: {
          sacramental: true,
          sundaySchool: true
        },
        date: "2019-07-21"
      },
      {
        image: {
          url: "http://lorempixel.com/250/250/people?1=120900y",
          title: "Remy Sharp"
        },
        name: "Sergio Fernandez",
        attended: {
          sacramental: true,
          sundaySchool: true
        },
        date: "2019-07-21"
      },
      {
        image: {
          url: "http://lorempixel.com/250/250/people?1=120909",
          title: "Remy Sharp"
        },
        name: "Maya Reynolds",
        attended: {
          sacramental: true,
          sundaySchool: true
        },
        date: "2019-07-21"
      },
      {
        image: {
          url: "http://lorempixel.com/250/250/people?1=120909hjhkk",
          title: "Remy Sharp"
        },
        name: "Imani Juarez",
        attended: {
          sacramental: true,
          sundaySchool: true
        },
        date: "2019-07-21"
      }
    ]
  };

  handleToggle = (field, idx) => () => {
    const { list } = this.state;
    debugger;
    list[idx].attended[field] = !list[idx].attended[field];

    this.setState({ ...this.state, list });
  };

  render() {
    const { classes } = this.props;
    const { list = [] } = this.state;

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

export default withStyles(styles)(ParticipantList);
