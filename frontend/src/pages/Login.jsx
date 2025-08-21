import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  createTheme,
  ThemeProvider,
  CircularProgress,
  Alert,
} from "@mui/material";
import Carrossel from "../components/Carrossel";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    h4: {
      fontSize: "3rem",
      fontWeight: 700,
    },
  },
});

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulação de login (substitua pelo seu fetch real)
    setTimeout(() => {
      setLoading(false);
      if (
        loginData.email === "ppereira@email.com" &&
        loginData.password === "123456"
      ) {
        localStorage.setItem("auth", "true");
        navigate("/profile");
      } else {
        setError("Email ou password inválidos.");
      }
    }, 1200);
  };

  return (
    <>
      <Carrossel />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            p: 4,
            background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
            width: "100%",
            maxWidth: 400,
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h4" align="center" gutterBottom>
              Login
            </Typography>
          </ThemeProvider>
          <Box sx={{ mt: 3 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                required
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  mt: 2,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  borderRadius: 3,
                  boxShadow: 2,
                }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
}