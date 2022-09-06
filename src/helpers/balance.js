import axios from "axios";
import config from "../config";

export const getBalances = async (token) => {
  try {
    const response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/balances/`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};
