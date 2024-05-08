//AXIOS
import axios from "axios";
//COMMON API

//JWT-DECODER
import jwt from "jwt-decode";
//LOGIN CONSTANTS
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGOUT,
    USER_FORGETPASS_REQUEST,
    USER_FORGETPASS_SUCCESS,
    USER_FORGETPASS_FAILURE,
  } from "../constants/RegisterConstants";

//Register  ACTIONS
export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const apiServer = import.meta.env.VITE_REACT_APP_API_URL;
    const { data } = await axios.post(`${apiServer}/api/register/`, formData);
   
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });


  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILURE,
      payload: error,
    });

  }
};



//Forget Password  ACTIONS
export const forgetpassword = (email,password,password2) => async (dispatch) => {
  print("action",email)
  try {
    dispatch({
      type: USER_FORGETPASS_REQUEST,
    });



    var bodyFormData = new FormData();
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    bodyFormData.append("password2", password2);
    const apiServer = import.meta.env.VITE_REACT_APP_API_URL;

    const { data } = await axios.post(`${apiServer}/api/change_password/`, bodyFormData);
   
    dispatch({
      type: USER_FORGETPASS_SUCCESS,
      payload: data,
    });
    

  } catch (error) {
    dispatch({
      type: USER_FORGETPASS_FAILURE,
      payload: error,
    });

  }
};

// Logout Actions

export const Logout = () => (dispatch) => {
  window.localStorage.clear();
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')

  window.location.reload();
  dispatch({ type: USER_LOGOUT });
};
