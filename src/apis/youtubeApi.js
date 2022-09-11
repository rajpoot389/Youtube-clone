import axios from "axios";

// const KEY = "AIzaSyAmd-cwy9GONbPbx1kIjuJqrvja7UhhJTU";
const KEY = `AIzaSyCxc01a9AAcCBPo9yCjMrTIlPxAz1WnA74`
export const youtubeApi = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});



// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAmd-cwy9GONbPbx1kIjuJqrvja7UhhJTU&channelId=UCYPrd7A27nLhQONcCIfFTaA&part=snippet,id=ByH9LuSILxU&order=date&maxResults=3