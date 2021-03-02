import React, { Component, Fragment } from "react";
import "./FeedList.css";
import pic from "./dawn.jpg";
import { Row, Col, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddPagination from "../OtherComponents/AddPagination";
import { getfeedPosts } from "../DataServices/fakeFeedPostService";
import { paginate } from "../OtherComponents/paginate";
import SearchBar from "../OtherComponents/SearchBar";
import _ from "lodash";
import axios from "axios";

class FeedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedPosts: [],
      currentPage: 1,
      pageSize: 6,
      sortPosts: { path: "title", order: "desc" },
      searchQuery: "",
    };
  }

  // handleToVideos = () => {
  //   this.props.history.push("/videolist");
  // };

  componentDidMount() {
    this.setState({ feedPosts: getfeedPosts() });
  }

  // async componentDidMount() {
  //   const { data: feedPosts } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   );
  //   this.setState({ feedPosts });
  // }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  // handleSort = (path) => {
  //   this.setState({ sortPosts: { path, order: "desc" } });
  // };

  render() {
    const {
      feedPosts,
      currentPage,
      sortPosts,
      pageSize,
      searchQuery,
      feedPosts: allPosts,
    } = this.state;

    let filtered = allPosts;
    if (searchQuery)
      filtered = allPosts.filter(
        (p) =>
          // p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          p.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      );

    const sorted = _.orderBy(filtered, [sortPosts.path], [sortPosts.order]);

    const FeedPosts = paginate(sorted, currentPage, pageSize);

    return (
      <Fragment>
        <Container fluid>
          {/* <button onClick={this.handleToVideos}>VideoList</button> */}
          {/* <p>Today</p> */}
          <Row>
            <Col sm={8} className="feed_col_1">
              <Col sm={9}>
                <SearchBar
                  value={searchQuery}
                  onChange={this.handleSearch}
                  classes="form-comtrol my-3 feed_search"
                />
              </Col>
              <p>Feed List</p>
              {FeedPosts.map((e) => {
                return (
                  <ul key={e.id} className="feed-item">
                    <div>
                      <Image alt="thumbnail" src={pic} className="feed_img" />
                    </div>
                    <Link
                      to={`/feedDetail/${e.id}/${e.title}/${e.body}`}
                      className="feed_title"
                    >
                      <div className="feed_content">
                        <h5 className="feed_heading1">{e.title}</h5>
                        <p className="feed_heading2">{e.body}</p>
                      </div>
                    </Link>
                  </ul>
                );
              })}
              <AddPagination
                postsCount={feedPosts.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeedList;
