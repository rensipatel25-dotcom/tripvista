import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#06113D",
        padding: 3,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "430px",
          padding: 4,
          borderRadius: "28px",
          background: "#fff",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#06113D",
            mb: 1,
          }}
        >
          Welcome Back
        </Typography>

        <Typography
          sx={{
            color: "#777",
            mb: 3,
          }}
        >
          Sign in to continue your journey.
        </Typography>

        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.5,
            borderRadius: "30px",
            backgroundColor: "#06113D",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#4FC3F7",
              color: "#06113D",
            },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;