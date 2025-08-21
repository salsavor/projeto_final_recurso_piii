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

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Simulação de registo (substitua pelo seu fetch real)
    setTimeout(() => {
      setLoading(false);
      if (
        registerData.name &&
        registerData.email.includes("@") &&
        registerData.password.length >= 6
      ) {
        setSuccess("Registo efetuado com sucesso!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setError("Preencha todos os campos corretamente.");
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
              Registar
            </Typography>
          </ThemeProvider>
          <Box sx={{ mt: 3 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            {success && (
              <Alert severity="success" sx={{ mb: 2 }}>
                {success}
              </Alert>
            )}
            <form onSubmit={handleRegister}>
              <TextField
                label="Nome"
                fullWidth
                margin="normal"
                required
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                required
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                required
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
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
                {loading ? <CircularProgress size={24} color="inherit" /> : "Registar"}
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
}