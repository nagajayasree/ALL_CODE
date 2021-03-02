import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import NavBar2 from "./Components/NavBar2";
import FeedList from "./Components/FeedList";
import VideoList from "./Components/VideoList";
import FeedDetail from "./Components/FeedDetail";
import VideoDetail from "./Components/VideoDetail";
import Audios from "./Components/Audios";
import AddBlog from "./Components/AddBlog";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col sm={3}>
            <NavBar2 />
          </Col>
          <Col sm={9}>
            <Switch>
              {/* ///displays the feedDetails of selected feedlist */}
              <Route
                path="/feedDetail/:id/:title/:body"
                component={FeedDetail}
              />
              <Route
                path="/videoDetail/:id/:title/:desc/:link"
                component={VideoDetail}
              />
              <Route
                path="/feed"
                // render={(props) => <FeedList sortBy="newest" {...props} />}
                component={FeedList}
              />
              <Route path="/videos" component={VideoList} />
              <Route path="/audios" component={Audios} />
              <Route path="/addBlog" component={AddBlog} />
              <Redirect from="/" exact to="/feedlist"></Redirect>
              {/* /////displays
              this page automatically when page is loaded///////// */}
              <Redirect from="/feedlist" to="/feed" />
              <Redirect from="/videolist" to="/videos" />
              {/* ///displays NotFound comp if url doesn't match with the above */}
              paths
              <Route to="/not-found" component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
