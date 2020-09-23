import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
} from "../Actions/Users.actions";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

function getUserReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      // console.log("request", action);
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      // console.log("sukses", action);
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default getUserReducer;
