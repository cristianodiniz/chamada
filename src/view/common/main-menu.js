import React,{ useContext }  from "react";
import {ReactReduxContext} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";


import {signOut} from '../../store/actions/authActions'
import firebase from '../../config/fbConfig'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function MainMenu(props) {

  const classes = useStyles();
  const { store } = useContext(ReactReduxContext)
  const { getState, dispatch } = store
  
  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <List className={classes.list}>
        <Link to={"/"}>
          <ListItem button key={"Home"}>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to={"/report"}>
          <ListItem button key={"Report"}>
            <ListItemText primary={"Report"} />
          </ListItem>
        </Link>
        <Link to={"/"} onClick={()=>{
            signOut()(dispatch,getState,{getFirebase: ()=>firebase})
        }}>
          <ListItem button key={"Logout"}>
            <ListItemText primary={"Logout"} />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}
