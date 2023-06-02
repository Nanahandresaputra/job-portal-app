import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJobById } from "../../app/features/jobList/action";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import logo from "../../assets/logo-comp.png";
import { Link } from "react-router-dom";
import { BiDollar, BiTimeFive } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { MdLocationCity } from "react-icons/md";

const JobDetail = () => {
  /* eslint-disable */
  const { jobById } = useSelector((state) => state.job);
  const { seed } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobById());
  }, [dispatch]);

  return (
    <Box mt={{ xs: "20vh", sm: "10vh", md: "15vh" }} mb="3vh">
      {jobById.length < 1 ? (
        <Typography variant="h3" align="center" height="75vh">
          Loading...
        </Typography>
      ) : (
        <Box>
          {jobById?.map((index, i) => (
            <Container key={i}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3} align="center">
                    <Box component="img" src={index.employer_logo === null ? logo : index.employer_logo} maxWidth={{ xs: "100px", sm: "200px" }} maxHeight={{ xs: "100px", sm: "200px" }} />
                  </Grid>
                  <Grid item xs={8} align="left">
                    <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }}>
                      {index.job_title}
                    </Typography>
                    <Link to={index.employer_website === null ? "" : index.employer_website} style={{ textDecoration: "none" }}>
                      <Typography fontSize={{ xs: 12, sm: 17 }}>
                        <MdLocationCity /> {index.employer_name}
                      </Typography>
                    </Link>
                    <Typography fontSize={{ xs: 12, sm: 17 }}>
                      <ImLocation /> {index.job_city}, {index.job_country}
                    </Typography>
                    <Typography fontSize={{ xs: 12, sm: 17 }}>
                      <BiDollar /> {index.job_salary_currency === null ? "The company does not display salary" : index.job_salary_currency}
                    </Typography>
                    <Typography fontSize={{ xs: 12, sm: 17 }}>
                      <BiTimeFive /> {index.job_employment_type}
                    </Typography>
                    <Link to={seed ? index.job_apply_link : "/login"}>
                      <Button variant="contained" size="small" sx={{ bgcolor: "primary.dark", color: "secondary.main", my: "10px", fontSize: { xs: 12, sm: 17 } }}>
                        Apply Now
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Box component="hr" />
              </Box>
              <Box>
                <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }} mb="1vh">
                  Skills
                </Typography>

                <Grid container spacing={2}>
                  {index.job_required_skills === null ? (
                    <Typography align="center" fontSize={{ xs: 12, sm: 17 }}>
                      -
                    </Typography>
                  ) : (
                    index.job_required_skills?.map((idx) => (
                      <Grid item xs={4} sm={3}>
                        <Paper elevation={2} sx={{ bgcolor: "#EDEDED " }}>
                          <Typography align="center" fontSize={{ xs: 12, sm: 17 }}>
                            {idx}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))
                  )}
                </Grid>
              </Box>
              <Box>
                <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }} my="1vh">
                  Description
                </Typography>
                <Typography fontSize={{ xs: 12, sm: 17 }} sx={{ whiteSpace: "pre-line" }}>
                  {index.job_description}
                </Typography>
              </Box>
              <Box>
                <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }} my="1vh">
                  Qualifications
                </Typography>
                {index.job_highlights.Qualifications === null ? (
                  <Typography align="center" fontSize={{ xs: 12, sm: 17 }}>
                    -
                  </Typography>
                ) : (
                  index.job_highlights.Qualifications?.map((idx) => <Typography fontSize={{ xs: 12, sm: 17 }}>{idx}</Typography>)
                )}
              </Box>
              <Box>
                <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }} my="1vh">
                  Experience
                </Typography>
                <Typography fontSize={{ xs: 12, sm: 17 }}>
                  {index.job_required_experience.required_experience_in_months === null
                    ? "no experience"
                    : index.job_required_experience.required_experience_in_months < 12
                    ? "less than 1 year"
                    : `${Math.floor(index.job_required_experience.required_experience_in_months / 12)} years`}
                </Typography>
              </Box>
              <Box>
                <Typography component="h1" fontWeight={600} fontSize={{ xs: 15, sm: 20 }} my="1vh">
                  Education
                </Typography>
                <Typography fontSize={{ xs: 12, sm: 17 }}>{index.job_required_education.high_school === true ? "High School" : null}</Typography>
                <Typography fontSize={{ xs: 12, sm: 17 }}>{index.job_required_education.bachelors_degree === true ? "Bachelor Degree" : null}</Typography>
              </Box>
            </Container>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default JobDetail;
