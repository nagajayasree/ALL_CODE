import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Feed from "../Components/Feed";
import Videos from "../Components/Videos";
import store from "../Redux/Store";

function Data() {
  return (
    <>
      <Provider store={store}>
        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default Data;
