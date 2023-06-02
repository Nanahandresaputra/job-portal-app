import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
// import { useEffect } from "react";
// import { dataUser } from "../../app/features/getuser/action";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(dataUser());
  // }, [dispatch, seed]);

  const experience = [
    {
      year: "july 2019 - July 2022",
      position: "Frontend Developer",
      company: "PT Lorem Ipsum",
      description:
        "-Lorem Ipsum is simply dummy text of the printing and tis simply dummy text of the printing and typesetting industry.\n- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n - Lorem Ipsum has been the industry's standard is simply dummy text of the printing and tdummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    },
    {
      year: "July 2018 - July 2019",
      position: "Intern",
      company: "PT Tech Lorem",
      description:
        "-Lorem Ipsum is simply dummy text of the printing is simply dummy text of the printing and tand typesetting industry.\n - Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.\n - Lorem Ipsum has been the industry's stais simply dummy text of the printing and tndard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ",
    },
  ];

  const education = [
    {
      year: "July 2014 - July 2018",
      school: "Testing University",
      major: "Informatics Engineering",
    },
    {
      year: "July 2011 - July 2014",
      school: "SMA Testing",
      major: "",
    },
  ];

  const skills = ["Material Ui", "ReactJS", "Javascript", "NodeJs", "expressjs", "bootstrap"];
  return (
    <Box my="10vh" mx={{ xs: "1em", sm: "3em" }} display="flex" alignItems="center" justifyContent="center">
      <Paper elevation={3} sx={{ width: { xs: "27em", sm: "32em", md: "38em" }, py: "2vh", px: "1em" }}>
        {userData?.map((index, i) => (
          <Grid container spacing={3} key={i}>
            <Grid item xs={4} align="right">
              <Avatar src={index.picture.medium} sx={{ bgcolor: "red", width: { xs: "70px", sm: "90px" }, height: { xs: "70px", sm: "90px" } }} />
            </Grid>
            <Grid item xs={8} align="start">
              <Typography fontSize={{ xs: "15px", sm: "20px" }}>{`${index.name.first} ${index.name.last}`}</Typography>
              <Typography fontSize={{ xs: "10px", sm: "13px" }}>{`${index.location.city}, ${index.location.country}`}</Typography>
              <Typography fontSize={{ xs: "10px", sm: "13px" }}>{index.email}</Typography>
            </Grid>
          </Grid>
        ))}
        <hr />
        <Box my="2vh">
          <Typography component="h1" fontWeight={600} fontSize={{ xs: "13px", sm: "17px" }}>
            About Me
          </Typography>
          <Typography fontSize={{ xs: "10px", sm: "13px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an type specimen book unchanged.
          </Typography>
        </Box>
        <Box>
          {/* ===================================================================================================== */}
          <Typography component="h1" fontWeight={600} fontSize={{ xs: "13px", sm: "17px" }}>
            Experience
          </Typography>
          <Grid container>
            {experience?.map((index, i) => (
              <Grid item xs={12} key={i} sx={{ my: "4px" }}>
                <Box display="flex">
                  <Typography fontSize={{ xs: "10px", sm: "13px" }} flex="0 0 auto">
                    {index.year}{" "}
                  </Typography>
                  <Box ml="2.5em">
                    <Typography fontSize={{ xs: "10px", sm: "13px" }} fontWeight={600}>
                      {index.position}
                    </Typography>
                    <Typography fontSize={{ xs: "10px", sm: "13px" }}>{index.company}</Typography>
                    <Typography fontSize={{ xs: "10px", sm: "13px", whiteSpace: "pre-line" }} sx={{ wordWrap: "break-word" }}>
                      {index.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* ===================================================================================================== */}
        <Box>
          <Typography component="h1" fontWeight={600} fontSize={{ xs: "13px", sm: "17px" }}>
            Education
          </Typography>
          <Grid container>
            {education?.map((index, i) => (
              <Grid item xs={12} key={i} sx={{ my: "4px" }}>
                <Box display="flex">
                  <Typography fontSize={{ xs: "10px", sm: "13px" }} mr="8em">
                    {index.year}{" "}
                  </Typography>
                  <Box>
                    <Typography fontSize={{ xs: "10px", sm: "13px" }} fontWeight={600}>
                      {index.school}
                    </Typography>
                    <Typography fontSize={{ xs: "10px", sm: "13px" }}>{index.major}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* =================================================================================================== */}
        <Box>
          <Typography component="h1" fontWeight={600} fontSize={{ xs: "13px", sm: "17px" }}>
            Skill
          </Typography>
          <Grid container spacing={1}>
            {skills?.map((index, i) => (
              <Grid item key={i}>
                <Typography fontSize={{ xs: "10px", sm: "13px" }}>{index}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
