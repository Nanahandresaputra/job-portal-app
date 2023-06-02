import { GET_JOB, GET_JOB_BY_ID, GET_JOB_ID, PER_PAGE, SEARCH } from "./constant";

const initialstate = {
  listJob: [],
  jobById: [],
  jobId: sessionStorage.getItem("jobId") || "",
  keyword: "all",
  pagination: 1,
};

const jobReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_JOB: {
      return { ...state, listJob: action.payload };
    }
    case GET_JOB_BY_ID: {
      return { ...state, jobById: action.payload };
    }
    case GET_JOB_ID: {
      return { ...state, jobId: action.payload };
    }
    case SEARCH: {
      return { ...state, keyword: action.payload };
    }
    case PER_PAGE: {
      return { ...state, pagination: action.payload };
    }
    default:
      return state;
  }
};

export default jobReducer;
