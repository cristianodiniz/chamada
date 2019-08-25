import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route,Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import AttendanceReport from "./view/attendance-report";
import SchedulesView from "./view/schedules-view"
import Login from './view/login'
import { handlerInitialData } from "./store/actions/shared";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handlerInitialData());
  }
  render() {
    const { loading ,isNotAuth} = this.props;

    return (
      <div className="App">
        <Router>
          <Fragment>
            <LoadingBar />
            {!loading && (
              <Switch>
                <Route exact path="/" component={SchedulesView} />
                <Route path="/schedule/:scheduleId/attendance" component={AttendanceReport} />
                <Route path="/login" component={Login} />
                {/* <Route path="/:category" exact component={Dashboard} />
              <Route path="/:category/:id" component={PostPage} />  */}
              </Switch>
            )}
            {isNotAuth && <Redirect to="/login"/> }
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ loadingBar,firebase }) {
  return {
    loading: loadingBar ? loadingBar.default === 1 : true,
    isNotAuth: (!firebase.auth.uid) 
  };
}

export default connect(mapStateToProps)(App);
