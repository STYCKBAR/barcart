import React, { useState, useEffect, createContext, useContext } from "react";
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


export default function SignUp() {
  //state: username, password, confirmedPassword, isPasswordMatch
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [userid, setUserId] = useState();
  const [isPasswordMatch, setIsPasswordMatch] = useState();
  const [clicked, setClicked] = useState();
  const navigate = useNavigate();
  const UserContext = createContext();

  //when user click button, we get the username, password from the form and make a post request to backend
  const handleSubmit = (event) => {

    event.preventDefault();
    setClicked(true);
    console.log("event currentTarget", event.currentTarget);
    //get data (username, password) from the form
    const data = new FormData(event.currentTarget);
    console.log("data: ", data)
    //reset the state of username and password, IsPasswordMatch
    setUserName(data.get("username"));
    setPassword(data.get("password"));
    console.log("data.get(password)", data.get("password"));
    setIsPasswordMatch(data.get("password") === data.get("confirmPassword"));

  }
  const goToMainPage = () => {
    //go to main page
    navigate("/cocktails");
  };

  useEffect(() => {
    //we only call post request and go to main page, when the password is not empty and two passwords are the same
    console.log("password is: ", password);
    console.log("passwordmatch: ", isPasswordMatch);
    if (clicked) {
      if (password && isPasswordMatch) {

        //post to backend, get response
        // fetch("auth/signup", {
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
        //      localStorage.setItem("userid", data.userid);

        //   })
        //   .catch((err) => console.log("signup: ERROR: ", err));

        //go to main page
        localStorage.setItem("userid", "fake123");
        goToMainPage();
        console.log("went to main page after signing up")
      }
      else {
        document.getElementById('password').style.color = 'red';
        document.getElementById('confirmPassword').style.color = 'red';
      }

    }

  }, [isPasswordMatch])




  return (
    <UserContext.Provider userid={userid}>
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
            <Typography component="h1" variant="h5" >
              Sign Up
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
              />
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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </UserContext.Provider>
  );
}
