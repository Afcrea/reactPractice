// LoginFormMui.jsx

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Grid } from '@mui/material';
import axios from 'axios';
import setCookie from '../CookieComponent/SetCookie';
import { useNavigate  } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const formData = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      // Axios를 사용하여 POST 요청 보내기
      const response = await axios.post('api/login', formData);

      setCookie('LoginToken', response.data.token, 1000);

      navigate("/");

    } catch (error) {
      alert('failed', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form style={{ width: '100%', marginTop: 16 }} onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name='email'
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                name='password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" fullWidth type='submit' style={{ marginTop: 16 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
