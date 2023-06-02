import api from "../../../config/config";
import { getJobId, getJobList } from "../../api/api";
import { GET_JOB, GET_JOB_BY_ID, GET_JOB_ID, PER_PAGE, SEARCH } from "./constant";

export const getJobData = () => {
  return (dispatch, getState) => {
    let search = getState().job.keyword;
    let pages = getState().job.pagination;
    let params = { query: search, "rapidapi-key": api.jobApiKey, page: pages };
    getJobList(params).then((res) =>
      dispatch({
        type: GET_JOB,
        payload: res.data.data,
      })
    );
  };
};

export const getJobById = () => {
  return (dispatch, getState) => {
    let id = getState().job.jobId;
    let params = {
      job_id: id,
      "rapidapi-key": api.jobApiKey,
    };
    getJobId(params).then((res) =>
      dispatch({
        type: GET_JOB_BY_ID,
        payload: res.data.data,
      })
    );
  };
};

export const getJobIdData = (id) => {
  return {
    type: GET_JOB_ID,
    payload: id,
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SEARCH,
    payload: keyword,
  };
};

export const perPage = (pages) => {
  return {
    type: PER_PAGE,
    payload: pages,
  };
};
