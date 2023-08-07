// actions/verifyOTP.js

import * as api from '../api';

// Action creator to generate OTP
export const generateOTP = (email) => async (dispatch) => {
  try {
    const response = await api.generateOTP(email);
    const otpStatus = response.data.message;

    if (otpStatus === 'Mail Sent Successfully') {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    console.log("src actions verifyOTP generateOTP", error);
    return Promise.reject(error);
  }
};

// Action creator to verify OTP
export const verifyOTP = (email, recvOTP) => async (dispatch) => {
  try {
    const response = await api.verifyOTP(email, recvOTP);
    const isVerified = response.data.message;

    if (isVerified) {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  } catch (error) {
    console.log("src actions verifyOTP verifyOTP", error);
    return Promise.reject(error);
  }
};