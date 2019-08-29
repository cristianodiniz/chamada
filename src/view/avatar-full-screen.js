import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
// import EditIcon from "@material-ui/icons/Edit";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class AvatarFullScreen extends Component {
  inputFileComponet= ""
  constructor(props){
    super(props);
    this.inputFileComponet = React.createRef();
    this.handlerUpdateImage = this.handlerUpdateImage.bind(props.person).bind(this);
  }
 

  handlerUpdateImage = () => {
    // inputFileComponet
    const {person} = this.props 
    debugger;
   // this.inputFileComponet;
   this.inputFileComponet.current.click();
    console.log("update image", person,this.inputFileComponet);
  };

  render() {
    
    const { handleClose, open, person, classes } = this.props;

    return (
      <Fragment>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Details
              </Typography>
              <Button color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <div className={classes.imageContainer}>
            {/* <EditIcon className={classes.editIcon}/> */}
            <input
              id="upload"
              ref={this.inputFileComponet}
              className={classes.inputFile}
              type="file"
              accept="image/*"
              multiple={false}
            />
            <img
              className={classes.image}
              src={person.avatar}
              alt={person.firstName}
              onClick={this.handlerUpdateImage}
            />

            <Typography variant="h6" className={classes.name}>
              {`${person.lastName}, ${person.firstName}`}
            </Typography>
            <Typography variant="h6" className={classes.name}>
              {`${person.officer ? person.officer : ""}`}
            </Typography>
            {/* <Typography variant="h6" className={classes.title}>
            {person.firstName}
          </Typography> */}
          </div>
        </Dialog>
      </Fragment>
    );
  }
}

const useStyles = {
  appBar: {
    position: "relative"
  },
  title: {
    // marginLeft: theme.spacing(2),
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
    objectFit: "contain"
  },
  name: {
    // marginLeft: theme.spacing(2),
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

export default withStyles(useStyles)(AvatarFullScreen);
