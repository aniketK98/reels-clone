import axios from "axios";

const instance = axios.create({ baseURL: "https://reels-clone.cyclic.app/" });

export default instance;
