import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";

export default function ProfilePage() {
  const navigate = useNavigate();

  //  dados do user falsos
  const user = {
    name: "Paulo Pereira",
    email: "ppereira@email.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 100, height: 100, margin: "0 auto", mb: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {user.email}
        </Typography>

        <Box mt={4}>
          <Button variant="outlined" color="error" onClick={handleLogout}>
            Sair
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
