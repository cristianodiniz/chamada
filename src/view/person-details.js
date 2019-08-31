import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppToolBar from "./app-tool-bar";

import { handleUpdatePerson } from "../store/actions/participants";

class PersonDetails extends Component {
  
  handlerChangeImage = () => {};

  renderDetailsBody = ({ firstName, officer, lastName, avatar },classes) => (
    <div className={classes.imageContainer}>
      <img
        className={classes.image}
        src={avatar}
        alt={firstName}
        onClick={this.handlerChangeImage}
      />

      <Typography variant="h6" className={classes.name}>
        {`${lastName}, ${firstName}`}
      </Typography>
      <Typography variant="h6" className={classes.name}>
        {`${officer ? officer : ""}`}
      </Typography>
    </div>
  );

  render() {
    const { person, classes, isReady} = this.props;
    return (
      <Fragment>
        <AppToolBar />
        {isReady && this.renderDetailsBody(person,classes)}
      </Fragment>
    );
  }
}

const styles = {
  appBar: {
    position: "relative"
  },
  title: {
    flex: 1,
    alignSelf: "center"
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "16px"
  },
  image: {
    flexGrow: 1,
    objectFit: "contain",
    minHeight: "70vh"
  },
  name: {
    flex: 1,
    alignSelf: "center"
  },
  editIcon: {
    float: "right"
  },
  inputFile: {
    display: "none"
  }
};

function mapStateToProps({ firestore }, { personId }) {
  const { persons } = firestore.data;
  const person = persons ? persons[personId] : null;
  return { isNotReady: !!person, person: person ? person : {} };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleUpdatePerson }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "persons" }])
)(withStyles(styles)(PersonDetails));
