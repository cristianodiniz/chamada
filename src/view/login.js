import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Login extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4" noWrap>
          Chamada
        </Typography>
        <Typography className={classes.substitle} variant="h6" noWrap>
          Attendance Report
        </Typography>

        <TextField
          required
          id="email-required"
          label="email"
          defaultValue=""
          className={classes.email}
          margin="normal"
        />
        <TextField
          required
          id="passwd-required"
          label="password"
          type="password"
          defaultValue=""
          className={classes.passwd}
          margin="normal"
        />

        <Button variant="contained" color="primary" className={classes.sigin}>
          Login
        </Button>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    backgroundColor: "#666f86",
    height: "100vh",
    paddingLeft: "16px",
    paddingRight: "16px"
  },
  title: {
    marginTop: "20%"
  },
  email: {
    marginTop: "20%"
  },
  passwd: {
    marginTop: "8px"
  },
  sigin: {
    marginTop: "20%"
  }
};

export default withStyles(styles)(Login);
