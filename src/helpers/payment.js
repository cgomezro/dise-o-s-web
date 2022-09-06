import axios from "axios";
import config from "../config";

/**
 * Send buy request
 */
export const submitPayment = async (amount, asset_id, swap, token) => {
  try {
    const response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/payments/`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: {
        amount,
        swap,
        asset_id,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

export const getPaymentStatus = async (session, token) => {
  try {
    const response = await axios({
      method: "get",
      url: `${config.SERVER_URL}/payments/${session}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return [null, response];
  } catch (error) {
    return [error];
  }
};

export const submitSell = async (amount, asset_id, token) => {
  try {
    const response = await axios({
      method: "post",
      url: `${config.SERVER_URL}/balances/sell`,
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
