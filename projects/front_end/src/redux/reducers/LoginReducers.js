//LOGIN CONSTANTS
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT,
} from "../constants/LoginConstants";
//Login Reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        access_token: action.payload,
        username:action.username,
        success: true,
      };
    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload?.response?.data?.errors
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// Logout Reducer
