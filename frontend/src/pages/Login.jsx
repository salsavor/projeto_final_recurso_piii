import React, { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

export default function LoginRegisterPage() {
  const [tab, setTab] = useState(0);
  const [loginData, setLoginData] = useState({ email: "", password: "" });


  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login com:", loginData);
    // requisição para o backend
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Acesso à Plataforma
        </Typography>

        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Registro" />
        </Tabs>

        <Box sx={{ mt: 3 }}>
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
              label="Senha"
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
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}
