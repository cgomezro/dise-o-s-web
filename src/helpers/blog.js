import axios from "axios";
import config from "../config";

export const getPosts = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/posts/`,
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};