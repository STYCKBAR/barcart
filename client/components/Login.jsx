// import React, { useState, useEffect, Navigate, useNavigate } from "react";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  withRouter,
} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Barcart
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

//this is the start of the component function:
export default function SignIn() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [verified, setVerified] = useState(true);
  const navigate = useNavigate();
  const [clicked, setClicked] = useState();

  //this is when the user click sign in sumbit
  //when click submit, we should get the username, password from the input and post it to backend,
  //the response from the backend will show verified or not, if verified, go to main page, if not, call the function in the signup click*/}

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("event currentTarget", event.currentTarget);
    //get data (username, password) from the form
    const data = new FormData(event.currentTarget);
    //reset the state of username and password
    setClicked(true);
    setUserName(data.get("username"));
    setPassword(data.get("password"));

    //post to backend, get response
    // fetch("auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    //   .then((data) => data.json())
    //   .then((data) => {
    //     //data here is the response
    //     //set state of verified
    //     setVerified(data.verified);
    //   })
    //   .catch((err) => console.log("Loginpage: ERROR: ", err));
    // setVerified(true);
    setVerified(false);
  };
  //this is handle click when we click 'Don't have an account? Sign Up'
  const handleClick = (event) => {
    goToSignUpPage();
    console.log("go to sign up page");
  };

  const goToMainpage = () =>
    navigate("/cocktails", { state: { verified, username, password } });

  const goToSignUpPage = () => {
    navigate("/signup");
  }

  //when the verified state changes, we trigger the useEffect and do somthing based on the verified value
  useEffect(() => {
    if (clicked) {
      if (!verified) {
        //if verified is false, change title to sign up
        goToSignUpPage();
        console.log("go to sign up page");
      } else {
        //if verified is true, bring user to main page
        goToMainpage();
        console.log("go to main page");
      }
    }
  }, [verified]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Typography component="h1" variant="h5" id="loginTitle">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* when click submit, we should get the username, password from the input and post it to backend, 
            the response from the backend will show verified or not, if verified, go to main page, if not, call the function in the signup click*/}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              id="logInButton"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                {/* when click the link of 'Don't have an account? Sign Up', we should reset the state of the title from signIn to signUp */}
                <Link href="#" variant="body2" onClick={handleClick}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
