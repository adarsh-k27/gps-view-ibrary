/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { login } from "store/actions/authAction";
import { useAppDispatch } from "store/hooks";
import { ROUTES_PATH } from "utils/constant";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThreeDots } from "react-loader-spinner";
const Login = () => {
  const [checked, setChecked] = useState(true);
  const [error, setError] = useState<any>({
    email: "",
    password: "",
  });
  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [btnLoad, setBtnLoad] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const formData: any = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (formData.password.length < 6) {
      return setError({
        email: "",
        password: "Please enter your 6 digit password",
      });
    }

    if (formData.email && formData.password) {
      setBtnLoad(true);
      dispatch(login(formData))
        .then((res) => {
          navigate(ROUTES_PATH.UPLOADACTIVITY);
        })
        .finally(() => {
          setBtnLoad(false);
        });
    }
    // pass authentiction Fuction Here
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            autoFocus
            onChange={() => {
              setError({});
            }}
          />
          <p className="srv-validation-message" style={{ color: "red" }}>
            {error.email ? error.email : ""}
          </p>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={() => {
              setError({});
            }}
          />
          <p className="srv-validation-message" style={{ color: "red" }}>
            {error.password ? error.password : ""}
          </p>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {btnLoad ? (
              <ThreeDots
                height="25"
                width="45"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                visible={true}
                wrapperStyle={{ justifyContent: "center" }}
              />
            ) : (
              "Sign In"
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
