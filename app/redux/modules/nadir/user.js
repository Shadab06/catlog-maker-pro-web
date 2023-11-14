import { ERROR, PROGRESS, userConst } from "../../constants/apiConstants";

const initialState = {
  data: null,
  progress: false,
  error: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConst.GET_LISTS:
      state = {
        progress: false,
        error: false,
        data: action.payload,
      };
      break;
    case PROGRESS:
      state = {
        progress: true,
        error: false,
        data: null,
      };
      break;
    case ERROR:
      state = {
        progress: false,
        error: true,
        data: null,
      };
      break;
  }

  return state;
};
