import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Divider,
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

const LibraryHomePage = () => {
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

  return (
    <Box
      sx={{
        minHeight: "100vh",
        p: { xs: 2, md: 6 },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 4 },
          mb: 6,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={800}
          color="primary.dark"
          gutterBottom
          sx={{ letterSpacing: 2 }}
        >
          GS - Books
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Descubra livros e autores em destaque!
        </Typography>
      </Paper>
      <ScrollSection title="Livros em Destaque" items={livros} />
      <ScrollSection title="Autores" items={autores} />
    </Box>
  );
};

export default LibraryHomePage;
