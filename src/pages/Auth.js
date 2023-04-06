import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign={"center"}>
            {isSignup ? "Signup" : "Login"}
          </Typography>

          {isSignup && (
            <TextField
              name="name"
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}

          <TextField
            name="email"
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />

          <TextField
            name="password"
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <NavLink to ="/" sx={{textDecoration: 'none'}}>
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          </NavLink>

          
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change To {isSignup ? "Login" : " Signup"}
          </Button>
          
        </Box>
      </form>
    </div>
  );
};

export default Auth;
