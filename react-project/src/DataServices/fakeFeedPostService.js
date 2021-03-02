import * as genresAPI from "./fakeGenreService";

const feedPosts = [
  {
    id: "sanscentralpost613",
    title: "Title01",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost643",
    title: "Title02",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost645",
    title: "Title03",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost623",
    title: "Title04",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost653",
    title: "Title05",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost675",
    title: "Title06",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost353",
    title: "Title07",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost775",
    title: "Title08",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost765",
    title: "Title09",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost735",
    title: "Title10",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost865",
    title: "Title11",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
  {
    id: "sanscentralpost985",
    title: "Title12",
    genre: { id: "sanscentralpost616", name: "Feed" },
    body:
      "Some body of the Item Some body of the Item Some body of the Item Some body of the Item",
  },
];

export function getfeedPosts() {
  return feedPosts;
}

export function getfeedPost(id) {
  return feedPosts.find((p) => p.id === id);
}

export function savefeedPost(post) {
  let feedPostInDb = feedPosts.find((p) => p.id === post.id) || {};
  feedPostInDb.name = post.name;
  feedPostInDb.genre = genresAPI.genres.find((g) => g.id === post.genreId);
  feedPostInDb.title = post.title;
  feedPostInDb.body = post.body;

  if (!feedPostInDb.id) {
    feedPostInDb.id = Date.now();
    feedPosts.push(feedPostInDb);
  }
  return feedPostInDb;
}
