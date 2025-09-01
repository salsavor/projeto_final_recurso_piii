import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Divider,
  AppBar,
  Toolbar,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";

const ScrollSection = ({ title, items, type }) => (
  <Box sx={{ my: 5 }}>
    <Typography
      variant="h5"
      sx={{
        mb: 2,
        fontWeight: 700,
        letterSpacing: 3,
      }}
    >
      {title}
    </Typography>
    <Divider sx={{ mb: 3 }} />
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 3,
        maxWidth: "100%",
        overflowX: "auto",
        pb: 2,
        /* width */

        "&::-webkit-scrollbar": {
          width: "1px",
          height: "10px",
        },
        /* Track */
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },

        /* Handle */
        "&::-webkit-scrollbar-thumb": {
          background: "#cacacaff",
        },

        /* Handle on hover */
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#a0a0a0ff",
        },
      }}
    >
      {items.map((item, index) => (
        <Card
          key={item.id || index}
          component={RouterLink}
          to={`/${type}/${item.id}`}
          sx={{
            minWidth: 200,
            maxWidth: 220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: 3,
            boxShadow: 4,
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 8,
              color: "primary.main",
            },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 120,
              height: 160,
              objectFit: "cover",
              borderRadius: 2,
              mt: 2,
              boxShadow: 2,
            }}
            image={item.image}
            alt={item.title}
          />
          <CardContent sx={{ textAlign: "center", pt: 2 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.subtitle}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default function Home() {
  const [search, setSearch] = useState("");

  const livros = [
    {
      id: "1",
      title: "Dom Quixote",
      subtitle: "Miguel de Cervantes",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "2",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "3",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "4",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "5",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "6",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "7",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "8",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "9",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      id: "10",
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
  ];

  const autores = [
    {
      id: "1",
      title: "Clarice Lispector",
      subtitle: "Brasileira",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "2",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "3",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "4",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "5",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "6",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "7",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "8",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "9",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      id: "10",
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
  ];

  // Filtra livros/autores pelo nome
  const filteredLivros = livros.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredAutores = autores.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ minHeight: "100vh", p: { xs: 2, md: 6 }, pt: 12 }}>
      <AppBar position="fixed" color="primary" elevation={3}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            fontWeight={800}
            sx={{ letterSpacing: 2 }}
            color="inherit"
          >
            GS - Books
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              component={RouterLink}
              to="/login"
              color="inherit"
              variant="outlined"
              sx={{ ml: 2, borderRadius: 2, fontWeight: 600 }}
            >
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              color="primary"
              variant="contained"
              sx={{ ml: 1, borderRadius: 2, fontWeight: 600 }}
            >
              Registar
            </Button>
            <TextField
              size="small"
              placeholder="Pesquisar livros e autores..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: { xs: 140, sm: 250, md: 350 } }}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" disabled>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { background: "#fff", borderRadius: 2 },
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <ScrollSection title="Livros" items={filteredLivros} type="book" />
      <ScrollSection title="Autores" items={filteredAutores} type="autor" />
    </Box>
  );
}
