import axios from "axios";
import config from "../config";

/**
 * Forgot password
 */
export const forgot = async (email) => {
  try {
    let response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/auth/forgot-password`,
      data: {
        email: email,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

/**
 * Reset password
 */
export const reset = async (code, password) => {
  try {
    let response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/auth/reset-password`,
      data: {
        code: code,
        password: password,
        passwordConfirmation: password,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

/**
 * Change (update) password
 */
export const update = async (id, token, password) => {
  try {
    let response = await axios({
      method: "put",
      url: `${config.SERVER_URL}/users/${id}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        password: password,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};
