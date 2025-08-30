import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Avatar,
  Divider,
  TextField,
  Stack,
  Alert,
} from "@mui/material";
import Carrossel from "../components/Carrossel";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export default function EditProfile() {
  const navigate = useNavigate();

  // Dados iniciais do user (simulação)
  const [profile, setProfile] = useState({
    name: "Paulo Pereira",
    email: "ppereira@email.com",
    avatar: "https://i.pravatar.cc/150?img=3",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!profile.name || !profile.email.includes("@")) {
      setError("Preencha corretamente o nome e o email.");
      return;
    }
    setSuccess("Perfil atualizado com sucesso!");
    setTimeout(() => {
      navigate("/profile");
    }, 1500);
  };

  const handleCancel = () => {
    navigate("/profile");
  };

  const handleDeleteAccount = () => {
    setOpenDialog(true);
  };

  const handleConfirmDelete = () => {
    setOpenDialog(false);
    // Simulação de apagar conta
    alert("Conta apagada com sucesso!");
    navigate("/register");
  };

  const handleCancelDelete = () => {
    setOpenDialog(false);
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
            borderRadius: 4,
          }}
        >
          <Avatar
            src={profile.avatar}
            alt={profile.name}
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              mb: 2,
              boxShadow: 3,
            }}
          />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Editar Perfil
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box component="form" onSubmit={handleSave} sx={{ mt: 2 }}>
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
            <TextField
              label="Nome"
              name="name"
              fullWidth
              margin="normal"
              value={profile.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={profile.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Avatar URL"
              name="avatar"
              fullWidth
              margin="normal"
              value={profile.avatar}
              onChange={handleChange}
            />
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ borderRadius: 20 }}
              >
                Guardar
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteAccount}
                sx={{ borderRadius: 20 }}
              >
                Apagar Conta
              </Button>
            </Stack>
          </Box>
        </Paper>
        <Dialog open={openDialog} onClose={handleCancelDelete}>
          <DialogTitle>Atenção!</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              Tem a certeza que deseja apagar esta conta? Ela será apagada para sempre! (Muito tempo!)
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancelDelete} color="primary">
              Cancelar
            </Button>
            <Button onClick={handleConfirmDelete} color="error" variant="contained">
              Apagar Conta
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}