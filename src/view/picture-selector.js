import React, { Fragment, Component } from "react";

import CameraIcon from "@material-ui/icons/CameraAlt";
import FileIcon from "@material-ui/icons/Filter";
import CancelIcon from "@material-ui/icons/Cancel";
import DoneIcon from "@material-ui/icons/Done";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import { withStyles } from "@material-ui/core/styles";

class PictureSelector extends Component {
  inputFile = "";
  imagePreview = "";
  constructor(props) {
    super(props);
    this.inputFile = React.createRef();
    this.imagePreview = React.createRef();
    this.handlerOpenGaleryImage = this.handlerOpenGaleryImage.bind(this);
  }

  handlerOpenGaleryImage = () => {
    this.inputFile.current.click();
  };

  handlerFileSelected = evt => {
    evt.stopPropagation();
    evt.preventDefault();
    const file = evt.target.files[0];
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (e) => {
      this.imagePreview.current.src = e.target.result
    } 
  
  };

  handlerOnConfirm = () => {
    this.props.onConfirm && this.props.onConfirm(this.inputFile.files[0])
    this.clear()
  }

  handlerOnCancel = () => {
    this.props.onCancel && this.props.onCancel()
    this.clear()
  }

  clear = () =>{
    this.inputFile.current.value = "";
    this.imagePreview.current.src = "";
  }
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container className={classes.root}>
          <h3>Choose the option:</h3>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
            >
              Camera
              <CameraIcon className={classes.rightIcon} />
            </Button>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              onClick={this.handlerOpenGaleryImage}
            >
              Galary
              <FileIcon className={classes.rightIcon} />
            </Button>
          </div>
          <div className={classes.preview}>
            <img ref={this.imagePreview} className={classes.imagePreview}></img>
          </div>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={this.handlerOnCancel}
            >
              Cancel
              <CancelIcon className={classes.rightIcon} />
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handlerOnConfirm}
            >
              Confirm
              <DoneIcon className={classes.rightIcon} />
            </Button>
          </div>
          <input
            id="upload"
            ref={this.inputFile}
            className={classes.inputFile}
            onChange={this.handlerFileSelected}
            type="file"
            accept="image/*"
            multiple={false}
          />
        </Container>
      </Fragment>
    );
  }
}

const styles = {
  root: {
    textAlign: "center"
  },
  inputFile: {
    display: "none"
  },
  buttons: {},
  button: {
    margin: "8px"
  },
  rightIcon: {
    marginLeft: "8px"
  },
  preview: {
    minHeight: "300px",
    background: "#e0e0e0e0",
    padding:"8px",
    display:"flex"
  },
  imagePreview:{
    objectFit: "contain",
    width: "100%"
  }

};

export default withStyles(styles)(PictureSelector);
