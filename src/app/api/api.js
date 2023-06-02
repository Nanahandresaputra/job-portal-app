import axios from "axios";
import api from "../../config/config";

export const getUser = async (params) => {
  const getData = await axios.get(api.randomUser, { params });
  return getData;
};

export const getJobList = async (params) => {
  const getData = await axios.get(`${api.jobList}/search`, { params });
  return getData;
};

export const getJobId = async (params) => {
  const getData = await axios.get(`${api.jobList}/job-details`, { params });
  return getData;
};
