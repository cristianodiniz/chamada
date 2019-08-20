import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";

import AttendanceReport from "./view/attendance-report";
import Schedules from "./view/schedules"
import { handlerInitialData } from "./actions/shared";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handlerInitialData());
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <Router>
          <Fragment>
            <LoadingBar />
            {!loading && (
              <Fragment>
                <Route path="/schedule/:scheduleId:/attendance" exact component={AttendanceReport} />
                <Route path="/schedule" exact component={Schedules} />
                {/* <Route path="/:category" exact component={Dashboard} />
              <Route path="/:category/:id" component={PostPage} />  */}
              </Fragment>
            )}
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar ? loadingBar.default === 1 : true
  };
}

export default connect(mapStateToProps)(App);
