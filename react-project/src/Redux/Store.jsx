import { createStore } from "redux";

const initialState = {
  feedPosts: [
    { id: 1, title: "title1", desc: "ahgfdsfguwiqoflq" },
    { id: 2, title: "title2", desc: "ahgfdsfguwiqoflq" },
    { id: 3, title: "title3", desc: "ahgfdsftewiqoflq" },
    { id: 4, title: "title4", desc: "ahgfddfgdfuwiqoflq" },
    { id: 5, title: "title5", desc: "ahgfdsfguwiqoflq" },
    { id: 6, title: "title6", desc: "ahgfdsfguwiqoflq" },
  ],
  videoPosts: [
    { id: 1, title: "title1", desc: "rwwahgfdsfguwiqofl" },
    { id: 2, title: "title2", desc: "afewqrhgfdsfguwiqlq" },
    { id: 3, title: "title3", desc: "juykrahgfdsftewiqof" },
    { id: 4, title: "title4", desc: "mjkrtyqahgfddfgdfuwi" },
    { id: 5, title: "title5", desc: "bnnnuirahgfd" },
    { id: 6, title: "title6", desc: "lsjjjq3844jjjjjjji" },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_FEEDPOSTS": {
      return Object.assign({}, state, {
        feedPosts: state.feedPosts,
      });
    }
    case "GET_VIDEOPOSTS": {
      return Object.assign({}, state, {
        videoPosts: state.videoPosts,
      });
    }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
