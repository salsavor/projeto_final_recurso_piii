import React from "react";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Carrossel from "../components/Carrossel";


export default function Book() {
  // Dados do livro falsos
  const book = {
    title: "O Senhor dos Anéis",
    author: "J.R.R. Tolkien",
    authorId: "tolkien", // id ou slug do autor
    cover: "https://tse4.mm.bing.net/th/id/OIP.9NMYdIWwJLvmmyx-b5V6LAHaK_?r=0&pid=Api",
    description:
      "Uma das maiores obras de fantasia de todos os tempos, acompanhando a jornada épica de Frodo e seus amigos pela Terra Média.",
  };

const defaultCover =
  "https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg";

  return (
    <>
      <Carrossel />
      <Box
        sx={{
          minHeight: "85vh",
          p: { xs: 2, md: 6 },
          display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Card
          sx={{
            boxShadow: 0,
            background: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={book.cover ? book.cover : defaultCover}
            alt={book.title}
            sx={{
              width: 180,
              height: 260,
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 4,
              mb: 3,
            }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
              {book.title}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              component={RouterLink}
              to={`/autor/${book.authorId}`}
              sx={{
                textDecoration: "none",
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {book.author}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {book.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ borderRadius: 20 }}
            >
              Reservar Livro
            </Button>
          </CardContent>
        </Card>
      </Paper>
    </Box>
    </>
  );
}
