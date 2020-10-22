import axios from "axios";

const KEY = "AIzaSyCJ5QrjxgDI_Y9pqAXFZzHeYqedCbCDzdA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
