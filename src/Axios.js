import axios from "axios";

const instance = axios.create({ baseURL: "https://reels-backend1.herokuapp.com/" });

export default instance;
