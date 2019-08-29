import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
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
    marginLeft: theme.spacing(2),
    flex: 1,
    alignSelf: "center"
  },
  editIcon:{
    float:"right"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const handlerUpdateImage = (person) => () => {
  console.log("update image")
}

export default function AvatarFullScreen(props) {
  const classes = useStyles();

  const { handleClose, open, person } = props;
  
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
          <img
            className={classes.image}
            src={person.avatar}
            alt={person.firstName}
            onClick={handlerUpdateImage(person)}
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
