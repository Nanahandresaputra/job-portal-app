import { getUser } from "../../api/api";
import { GET_SEED, GET_USER } from "./constant";

export const dataUser = () => {
  return (dispatch, getState) => {
    let params = {
      seed: getState().user.seed,
    };
    getUser(params).then((res) =>
      dispatch({
        type: GET_USER,
        payload: res.data.results,
      })
    );
  };
};

export const getSeed = (seed) => {
  return {
    type: GET_SEED,
    payload: seed,
  };
};
