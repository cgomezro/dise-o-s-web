import axios from "axios";
import config from "../config";

export const requestWithdrawal = async (amount, asset_id, token) => {
  try {
    const response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/withdrawals/`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        amount,
        asset_id,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

export const getWithdrawals = async (token) => {
  try {
    const response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/withdrawals/`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};
