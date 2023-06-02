import { Box, Button, Container, Grid, Pagination, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { getJobIdData, perPage } from "../../app/features/jobList/action";

const Jobs = ({ listJob, pagination }) => {
  const dispatch = useDispatch();
  const handleId = (id) => {
    dispatch(getJobIdData(id));
    sessionStorage.setItem("jobId", id);
  };
  const handlePage = (e, p) => {
    dispatch(perPage(p));
  };
  return (
    <Box my="10vh">
      <Box>
        <Typography variant="h4" mb="2vh" align="center">
          List Jobs
        </Typography>
        <Container>
          {/* ====================================================== */}
          {listJob?.map((index, i) => (
            <Paper elevation={3} sx={{ height: "100%", py: "10px", my: "25px" }} key={i}>
              <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} align="center">
                  <Typography fontWeight={600} fontSize={20}>
                    {index.job_title}
                  </Typography>
                  <Typography fontSize={12} color="#b1b7b3">
                    {index.employer_name}
                  </Typography>
                  <Typography fontSize={12} color="#b1b7b3">
                    {moment(index.job_posted_at_datetime_utc).utc().format("DD MMM YYYY")}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                  <Link to={`job-detail/${index.job_id}`}>
                    <Button variant="contained" sx={{ bgcolor: "primary.dark", color: "secondary.main", width: "20em" }} size="large" onClick={() => handleId(index.job_id)}>
                      Detail Jobs
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Box spacing={2} display="flex" justifyContent="center" alignItems="center" mt="15vh">
            <Pagination count={listJob.length} variant="outlined" shape="rounded" page={pagination} onChange={handlePage} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Jobs;
