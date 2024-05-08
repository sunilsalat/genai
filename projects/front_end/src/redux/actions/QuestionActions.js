//AXIOS
import axios from "axios";
//COMMON API

//JWT-DECODER
import jwt from "jwt-decode";
//LOGIN CONSTANTS
import {
    USER_QUESTION_REQUEST,
    USER_QUESTION_SUCCESS,
    USER_QUESTION_FAILURE,
} from "../constants/QuestionConstants";

//LOGIN ACTIONS
export const Question = (bodyFormData) => async (dispatch) => {

  try {
    dispatch({
      type: USER_QUESTION_REQUEST,
    });
   
    const apiServer = import.meta.env.VITE_REACT_APP_API_URL;

    const { data } = await axios.post(`${apiServer}/api/admin/question/`, bodyFormData);


    dispatch({
      type: USER_QUESTION_SUCCESS,
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: USER_QUESTION_FAILURE,
      payload: error

    });

  }
};

// Logout Actions
