import { GET_USER, GET_SEED } from "./constant";

const initialstate = {
  userData: [],
  seed: sessionStorage.getItem("seed") || "",
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userData: action.payload };
    case GET_SEED:
      return { ...state, seed: action.payload };
    default:
      return state;
  }
};

export default userReducer;
