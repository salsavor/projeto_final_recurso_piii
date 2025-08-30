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
} from "@mui/material";

const ScrollSection = ({ title, items }) => (
  <Box sx={{ my: 5 }}>
    <Typography
      variant="h5"
      sx={{
        mb: 2,
        fontWeight: 700,
        letterSpacing: 1,
        color: "primary.main",
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
        "&::-webkit-scrollbar": {
          height: 8,
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#adb6ae94",
          borderRadius: 4,
        },
      }}
    >
      {items.map((item, index) => (
        <Card
          key={index}
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
      title: "Dom Quixote",
      subtitle: "Miguel de Cervantes",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    {
      title: "Os Maias",
      subtitle: "Eça de Queirós",
      image: "https://i.imgur.com/t9qkeD1.jpeg",
    },
    // ...mais livros
  ];

  const autores = [
    {
      title: "Clarice Lispector",
      subtitle: "Brasileira",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
    // ...mais autores
    {
      title: "Fernando Pessoa",
      subtitle: "Português",
      image: "https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand",
    },
  ];

  // Filtra livros/autores pelo título ou subtítulo
  const filteredLivros = livros.filter(
    (l) =>
      l.title.toLowerCase().includes(search.toLowerCase()) ||
      l.subtitle.toLowerCase().includes(search.toLowerCase())
  );
  const filteredAutores = autores.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(search.toLowerCase())
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
          <TextField
            size="small"
            placeholder="Pesquisar livros ou autores..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ width: { xs: 140, sm: 250, md: 350 } }}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" disabled>
                      {/* Ícone aqui */}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: { background: "#fff", borderRadius: 2 },
              },
            }}
          />
        </Toolbar>
      </AppBar>
      <ScrollSection title="Livros em Destaque" items={filteredLivros} />
      <ScrollSection title="Autores" items={filteredAutores} />
    </Box>
  );
}
