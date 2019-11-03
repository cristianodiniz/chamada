import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { signIn } from "../../store/actions/authActions";

class Login extends Component {
    state = {
        email: "",
        password: "",
        organization: ""
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.signIn(this.state);
    };
    render() {
        const { authError, classes, auth } = this.props;

        if (auth.uid) {
            return <Redirect to='/' />;
        }

        return (
            <form onSubmit={this.handleSubmit} className={classes.form}>
                <Container maxWidth='sm' className={classes.container}>
                    <Typography className={classes.title} variant='h4' noWrap>
                        Chamada
                    </Typography>
                    <Typography
                        className={classes.substitle}
                        variant='h6'
                        noWrap
                    >
                        Attendance Report
                    </Typography>
                    <TextField
                        required
                        id='organization'
                        onChange={this.handleChange}
                        label='organization'
                        defaultValue=''
                        margin='normal'
                    />
                    <TextField
                        required
                        id='email'
                        onChange={this.handleChange}
                        label='email'
                        defaultValue=''
                        margin='normal'
                    />
                    <TextField
                        required
                        id='password'
                        onChange={this.handleChange}
                        label='password'
                        type='password'
                        defaultValue=''
                        margin='normal'
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        className={classes.btnLogin}
                    >
                        Login
                    </Button>
                    <div className={classes.divisor}>
                        <hr/>
                        <h2 className={classes.text}>OR</h2>
                    </div>
                    <Button
                        type='submit'
                        variant='contained'
                        color='secondary'
                        className={classes.btnSingUp}
                    >
                        Sign Up
                    </Button>

                    <div className='center red-text'>
                        {authError ? <p>{authError}</p> : null}
                    </div>
                </Container>
            </form>
        );
    }
}

const styles = {
    form: {
        backgroundColor: "#c5c7cc"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        paddingTop: "64px"
    },
    btnLogin: {
        marginTop: "32px"
    },
    btnSingUp: {
        marginTop: "16px"
    },
    divisor: {
        marginTop: "32px",
        height: "32px",
        position:'relative',
        textAlign:'center'
    },
    text: {
        backgroundColor: "#c5c7cc",
        width: "50px",
        position:'relative',
        top:'-25px',
        margin:'auto',
    }
};

const mapStateToProps = ({ auth, firebase }) => {
    return {
        authError: auth.authError,
        auth: firebase.auth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signIn: creds => dispatch(signIn(creds))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Login));
