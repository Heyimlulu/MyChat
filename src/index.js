import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";

// Components
import Connection from "./components/Connection";
import NotFound from "./components/Not-Found";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Connection} />
      <Route path="/:channel/:nickname" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
