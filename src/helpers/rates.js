import axios from "axios";
import config from "../config";

export const getRates = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/assets`,
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};
