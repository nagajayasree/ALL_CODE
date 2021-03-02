import * as genresAPI from "./fakeGenreService";

const videoPosts = [
  {
    id: "sanscentralpost654",
    title: "video01",
    genre: { id: "sanscentralpost618", name: "Video" },
    description:
      "Some Description of the Video Some Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the VideoSome Description of the Video",
    link: "https://www.youtube.com/embed/kT9sNV9iwRE",
  },
  {
    id: "sanscentralpost638",
    title: "video02",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/9utSIYt0xCc",
  },
  {
    id: "sanscentralpost659",
    title: "video03",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/q9IYhBLUKBw",
  },
  {
    id: "sanscentralpost639",
    title: "video04",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/o07tvGoHzQw",
  },
  {
    id: "sanscentralpost439",
    title: "video05",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/QRpwDwHAM_0",
  },
  {
    id: "sanscentralpost669",
    title: "video06",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/vbUcabz9fi0",
  },
  {
    id: "sanscentralpost356",
    title: "video07",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/kT9sNV9iwRE",
  },
  {
    id: "sanscentralpost238",
    title: "video08",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/9utSIYt0xCc",
  },
  {
    id: "sanscentralpost159",
    title: "video09",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/q9IYhBLUKBw",
  },
  {
    id: "sanscentralpost629",
    title: "video10",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/o07tvGoHzQw",
  },
  {
    id: "sanscentralpost519",
    title: "video11",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/QRpwDwHAM_0",
  },
  {
    id: "sanscentralpost459",
    title: "video12",
    genre: { id: "sanscentralpost618", name: "Video" },
    description: "Some Description of the Video",
    link: "https://www.youtube.com/embed/vbUcabz9fi0",
  },
];

export function getvideoPosts() {
  return videoPosts;
}

export function getPost(id) {
  return videoPosts.find((p) => p.id === id);
}

export function saveVideoPost(post) {
  let videoPostInDb = videoPosts.find((p) => p.id === post.id) || {};
  videoPostInDb.name = post.name;
  videoPostInDb.genre = genresAPI.genres.find((g) => g.id === post.genreId);
  videoPostInDb.title = post.title;
  videoPostInDb.description = post.description;

  if (!videoPostInDb.id) {
    videoPostInDb.id = Date.now();
    videoPosts.push(videoPostInDb);
  }
  return videoPostInDb;
}
