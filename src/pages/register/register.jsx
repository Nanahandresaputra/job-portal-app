import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";

const Register = () => {
  const regisData = ["name", "username", "email", "password", "address", "work experience", "study"];
  return (
    <Box height="92vh" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ width: { xs: "20em", sm: "30em" }, mt: "5vh", py: "2vh" }}>
        <Typography variant="h5" component="h1" align="center" fontWeight={600}>
          Register
        </Typography>
        <FormControl>
          <Grid container align="center">
            {regisData?.map((index, i) => (
              <Grid item xs={12} key={i}>
                <TextField
                  variant="outlined"
                  placeholder={index}
                  type={index === "username" || index === "name" || index === "address" || index === "work experience" || index === "study" ? (index = "text") : index}
                  sx={{
                    my: "1vh",
                    ".Mui-focused": {
                      color: "primary.dark",
                    },
                  }}
                  size="small"
                />
              </Grid>
            ))}
            <Button
              variant="contained"
              sx={{ bgcolor: "primary.dark", color: "secondary.main", m: "auto" }}
              onClick={() => {
                alert("register is under development, please see see demo account to login");
              }}
            >
              Register
            </Button>
          </Grid>
        </FormControl>
        <Box align="center" mt="3vh">
          <Button
            size="small"
            variant="text"
            sx={{ color: "black", textDecoration: "underline" }}
            onClick={() => {
              alert("username: yellowleopard218 \n password: glasses");
            }}
          >
            See Demo Account
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
