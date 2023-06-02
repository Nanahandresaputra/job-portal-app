import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSeed } from "../../app/features/getuser/action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const userData = {
    username: "yellowleopard218",
    password: "glasses",
    seed: "850a2fdaef689c94",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitData = (data) => {
    if (data.username != userData.username || data.password != userData.password) {
      setError("username", { type: "invalidCredential", message: "username or password invalid" });
      setError("password", { type: "invalidCredential", message: "username or password invalid" });
    } else {
      dispatch(getSeed(userData.seed));
      sessionStorage.setItem("seed", userData.seed);
      navigate("/");
    }
  };

  return (
    <Box mx="1rem" height="92vh" sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} flexDirection="column">
      <Paper elevation={3} sx={{ width: { xs: "20em", sm: "30em" }, my: "2vh", pt: "2vh" }}>
        <Typography variant="h5" component="h1" fontWeight={600} align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit(submitData)}>
          <FormControl>
            <Grid container align="center">
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  placeholder="username"
                  type="text"
                  size="small"
                  sx={{
                    my: "1vh",
                    width: "15em",
                  }}
                  error={errors.username ? true : false}
                  {...register("username")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  placeholder="password"
                  type="password"
                  size="small"
                  sx={{
                    my: "1vh",
                    width: "15em",
                  }}
                  error={errors.password ? true : false}
                  {...register("password")}
                />
              </Grid>
            </Grid>
            <Typography color="error" align="center">
              {errors.username ? errors.username?.message : errors.password ? errors.password?.message : null}
            </Typography>
            <Button type="submit" variant="contained" sx={{ bgcolor: "primary.dark", color: "secondary.main", m: "auto" }}>
              Login
            </Button>
          </FormControl>
        </form>
        <Typography component="p" m="1vh" align="center">
          not have account? <Link to="/register">Create here</Link>
        </Typography>
        <Box align="center">
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

export default Login;
