import axios from "axios";

const instance = axios.create({
  baseURL: "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com"
});

export default instance;
