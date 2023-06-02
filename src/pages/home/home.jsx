import { Box, Typography } from "@mui/material";
import * as components from "../../components/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobData } from "../../app/features/jobList/action";

const Home = () => {
  let { listJob, keyword, jobId, pagination } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobData());
  }, [dispatch, keyword, pagination]);
  return (
    <Box>
      <components.Banner keyword={keyword} />
      {listJob.length < 1 && keyword === "all" ? (
        <Typography variant="h3" align="center" my="10vh">
          Loading...
        </Typography>
      ) : listJob.length < 1 ? (
        <Typography variant="h3" align="center" my="10vh">
          {keyword} not found
        </Typography>
      ) : (
        <components.Jobs listJob={listJob} jobId={jobId} pagination={pagination} />
      )}
    </Box>
  );
};

export default Home;
