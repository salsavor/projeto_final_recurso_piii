import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  Divider,
  Stack,
} from "@mui/material";
import Carrossel from "../components/Carrossel";

export default function ProfilePage() {
  const navigate = useNavigate();

  // Dados do user falsos
  const user = {
    name: "Paulo Pereira",
    email: "ppereira@email.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const handleEdit = () => {
    // Navegar para página de edição de perfil (implemente se quiser)
    navigate("/edit-profile");
  };

  return (
    <>
      <Carrossel />
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Paper
          elevation={6}
          sx={{
            p: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #e3f2fd 0%, #fff 100%)",
          }}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {user.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {user.email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              sx={{ borderRadius: 20 }}
            >
              Editar Perfil
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleLogout}
              sx={{ borderRadius: 20 }}
            >
              Sair
            </Button>
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
