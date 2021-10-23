import React, { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginDb from "../../assets/loginDb.json"
import { useHistory } from "react-router-dom";
import { Header } from "../header";

const theme = createTheme();

function Login(props) {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const handleSubmit = () => {
    // console.log('******loginDb*******', loginDb)
    const usersData = loginDb
    const user = usersData.find((userObject) => {
      return userObject.email === email && userObject.password === password
    })
    if (!user) return setLoginError(true)
    history.push({
      pathname: `/home`,
      state: { user }
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(email)) setEmailError(true)
    else setEmailError(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/gm).test(password)) setPasswordError(true)
    else setPasswordError(false)
  }


  return (
    <React.Fragment>
      <Header auth={false} />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box>
              <TextField
                margin="normal"
                required
                fullWidth
                variant={'filled'}
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
              />
              {emailError && <label style={{ color: 'red', fontSize: '12px' }}>Email address not valid.</label>}
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={handlePasswordChange}
                name="password"
                label="Password"
                type="password"
                id="password"
                variant={'filled'}
                value={password}
                error={passwordError}
              />
              {passwordError && <label style={{ color: 'red', fontSize: '12px' }}>Password must contain one special character, one letter, one number and minimum eight characters.</label>}
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                disabled={emailError || passwordError}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {loginError && <label style={{ color: 'red', fontSize: '12px' }}>Username or password invalid.Login failed.!!</label>}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default React.memo(Login);
