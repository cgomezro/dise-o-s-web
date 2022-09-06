import axios from "axios";
import config from "../config";

/**
 * Login
 */
export const login = async (identifier, password) => {
  try {
    let response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/auth/local`,
      data: {
        identifier: identifier,
        password: password,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

/**
 * Signup
 */
export const signup = async (username, email, password) => {
  try {
    let response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/auth/local/register`,
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

/**
 * Get current user
 */
export const getCurrentUser = async (token) => {
  try {
    let response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/users/me`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

export const changePassword = async (id, token, password) => {
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
