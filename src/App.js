import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AttendanceReport from './view/attendance-report'

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Route path="/" exact component={AttendanceReport} />
          {/* <Route path="/:category" exact component={Dashboard} />
                <Route path="/:category/:id" component={PostPage} /> */}
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
