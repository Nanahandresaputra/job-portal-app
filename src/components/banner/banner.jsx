import { Box, Button, Container, FormGroup, Grid, TextField, Typography } from "@mui/material";
import personalBanner from "../../assets/personal-banner.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { perPage, setKeyword } from "../../app/features/jobList/action";

const Banner = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    let getQuery = event.target.value;
    setQuery(getQuery);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(perPage(1));
    dispatch(setKeyword(query));
  };

  return (
    <Box bgcolor="primary.main" pb="3vh" pt={{ xs: "15vh", md: "10vh" }}>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Container>
            <Typography variant="h3" fontWeight={600} component="p">
              Find{" "}
              <Typography variant="span" color="primary.dark">
                Job
              </Typography>{" "}
              That <br />
              <Typography variant="span" color="primary.dark">
                Matches
              </Typography>{" "}
              Your <br /> Passion.
            </Typography>
            <Typography component="p" color="#b1b7b3" my="3vh">
              Hand picked opportunities to work from home, remotely, freelance, full-time, part-time, contract, and internship
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormGroup row>
                <TextField variant="outlined" placeholder="search job" sx={{ input: { bgcolor: "white" } }} onChange={(e) => handleChange(e)} />
                <Button type="submit" variant="contained" disableElevation sx={{ bgcolor: "primary.dark", color: "secondary.main" }}>
                  Search
                </Button>
              </FormGroup>
            </form>
          </Container>
        </Grid>
        <Grid item sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Box component="img" src={personalBanner} sx={{ width: "500px", height: "500px" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
