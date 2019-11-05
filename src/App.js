import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import AttendanceReport from "./view/report/attendance-report";
import SchedulesView from "./view/schedules/schedules-view";
import AddOrEditSchedule from "./view/schedules/add-or-edit-schedule";
import Login from "./view/user/login";
import PersonDetails from "./view/person/person-details";
import Report from "./view/report/report";
import { handlerInitialData } from "./store/actions/shared";
import "./App.css";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handlerInitialData());
    }
    render() {
        const { isLoaded, isAuthenticated } = this.props;
  
        return (
            <div className='App'>
                 <LoadingBar />
                {isLoaded &&
                    <Fragment>
                        <Switch>
                            <Route exact path='/' component={SchedulesView} />
                            <Route
                                path='/schedule/:scheduleId/attendance'
                                component={AttendanceReport}
                            />
                            <Route
                                path='/schedule/add'
                                component={AddOrEditSchedule}
                            />
                            <Route path='/login' component={Login} />
                            <Route
                                path='/persons/:personId'
                                component={PersonDetails}
                            />
                            <Route path='/report' component={Report} />

                        </Switch>
                        {!isAuthenticated && <Redirect to='/login' />} 
                    </Fragment>
                }
            </div>
        );
    }
}

function mapStateToProps({ loadingBar, firebase }) {
    const isLoaded = loadingBar ? loadingBar.default === 0 : false;
    const isAuthenticated = firebase.isLoaded
        ? firebase.auth.emailVerified
        : false;
    
    return {
        isLoaded,
        isAuthenticated
    };
}

export default connect(mapStateToProps)(App);
