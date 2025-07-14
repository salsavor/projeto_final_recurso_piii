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
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registro com:", registerData);
    // Aqui você pode fazer a requisição para o backend
  };

  return (
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
        label="Senha"
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
        color="secondary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Register
      </Button>
    </form>
  );
}
