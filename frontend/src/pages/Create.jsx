import React, { useState } from "react";
import Carrossel from "../components/Carrossel";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  ThemeProvider,
  CircularProgress,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";

export default function Create() {
  const [type, setType] = useState("livro");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fields, setFields] = useState({
    titulo: "",
    autor: "",
    capa: "",
    genero: "",
    ano_publicacao: "",
    nome: "",
    nacionalidade: "",
    avatar: "",
    biografia: "",
    ano_nascimento: "",
    ano_falecimento: "",
  });

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      setLoading(false);
      // Validação simplesx
      if (
        (type === "livro" && (!fields.titulo || !fields.autor)) ||
        (type === "autor" && !fields.nome)
      ) {
        setError("Preencha todos os campos obrigatórios.");
        return;
      }
      setSuccess(
        type === "livro"
          ? "Livro registado com sucesso!"
          : "Autor registado com sucesso!"
      );
      setFields({
        titulo: "",
        autor: "",
        capa: "",
        genero: "",
        ano_publicacao: "",
        nome: "",
        nacionalidade: "",
        avatar: "",
        biografia: "",
        ano_nascimento: "",
        ano_falecimento: "",
      });
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
            maxWidth: 420,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Registar {type === "livro" ? "Livro" : "Autor"}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="type-label">Tipo</InputLabel>
            <Select
              labelId="type-label"
              value={type}
              label="Tipo"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="livro">Livro</MenuItem>
              <MenuItem value="autor">Autor</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ mt: 1 }}>
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
              {type === "livro" ? (
                <>
                  <TextField
                    label="Título"
                    name="titulo"
                    fullWidth
                    margin="normal"
                    required
                    value={fields.titulo}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Autor"
                    name="autor"
                    fullWidth
                    margin="normal"
                    required
                    value={fields.autor}
                    onChange={handleChange}
                  />
                  <TextField
                    label="URL da Capa"
                    name="capa"
                    fullWidth
                    margin="normal"
                    value={fields.capa}
                    onChange={handleChange}
                  />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField
                      label="Género"
                      name="genero"
                      margin="normal"
                      value={fields.genero}
                      onChange={handleChange}
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      label="Ano de Publicação"
                      name="ano_publicacao"
                      margin="normal"
                      required  
                      value={fields.ano_publicacao}
                      onChange={handleChange}
                      sx={{ flex: 1 }}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <TextField
                    label="Nome"
                    name="nome"
                    fullWidth
                    margin="normal"
                    required
                    value={fields.nome}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Nacionalidade"
                    name="nacionalidade"
                    fullWidth
                    required
                    margin="normal"
                    value={fields.nacionalidade}
                    onChange={handleChange}
                  />
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField
                      label="Ano de Nascimento"
                      name="ano_nascimento"
                      margin="normal"
                      required
                      value={fields.ano_nascimento}
                      onChange={handleChange}
                      sx={{ flex: 1 }}
                    />
                    <TextField
                      label="Ano de Falecimento"
                      name="ano_falecimento"
                      margin="normal"
                      value={fields.ano_falecimento}
                      onChange={handleChange}
                      sx={{ flex: 1 }}
                    />
                  </Box>
                  <TextField
                    label="URL da Foto"
                    name="avatar"
                    fullWidth
                    margin="normal"
                    value={fields.avatar}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Biografia"
                    name="biografia"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    value={fields.biografia}
                    onChange={handleChange}
                  />
                </>
              )}
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
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  `Registar ${type === "livro" ? "Livro" : "Autor"}`
                )}
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
