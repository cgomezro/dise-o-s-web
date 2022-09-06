import axios from "axios";
import config from "../config";

/**
 * Update current user profile
 */

export const updateProfile = async (id, token, data) => {
  try {
    let response = await axios({
      method: "put",
      url: `${config.SERVER_URL}/profiles/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: data,
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};
