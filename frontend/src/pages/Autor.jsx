import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Carrossel from "../components/Carrossel";

export default function Autor() {
  const { id } = useParams();
  const [autor, setAutor] = useState(null);

  // Dados do autor falsos
  const FalsoAutor = {
    nome: "J.R.R. Tolkien",
    nacionalidade: "Inglaterra",
    biografia:
      "J.R.R. Tolkien foi um escritor, professor e filólogo britânico, conhecido por suas obras de fantasia.",
    data_nascimento: "1892-01-03",
    data_falecimento: "1973-09-02",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMGMxMmRkNzctMWQzYy00MTY3LWEzMDAtMzEzMDhkZWI4MjZlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    livros: [
      {
        id: "1",
        titulo: "O Senhor dos Anéis",
        capa: "https://tse4.mm.bing.net/th/id/OIP.9NMYdIWwJLvmmyx-b5V6LAHaK_?r=0&pid=Api",
      },
      {
        id: "2",
        titulo: "Star Wars",
        capa: "https://i.imgur.com/t9qkeD1.jpeg",
      },
    ],
  };

  const defaultAvatar =
    "https://www.pngmart.com/files/23/Profile-PNG-Photo.png";


  useEffect(() => {
    // Para ver as informações falsas, use FalsoAutor
    setAutor(FalsoAutor);

    // Para usar a backend, troque para:
    // fetch(`http://localhost:5000/api/v1/autor/${id}`)
    //   .then((res) => res.json())
    //   .then((data) => setAutor(data))
    //   .catch(() => setAutor(null));
  }, [id]);

  if (!autor) return <p>Carregando autor...</p>;

  return (
    <>
    <Carrossel />

    <Box
      sx={{
        p: { xs: 2, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          maxWidth: 600,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={autor.avatar ? autor.avatar : defaultAvatar}
            alt={autor.nome}
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              marginBottom: 16,
              objectFit: "cover",
            }}
          />
          <Typography variant="h4" fontWeight={700} gutterBottom color="primary.dark">
            {autor.nome}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {autor.biografia}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Nacionalidade: {autor.nacionalidade}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" color="text.secondary">
            Nascimento: {autor.data_nascimento}
          </Typography>
          {autor.data_falecimento && (
            <Typography variant="body2" color="text.secondary">
              Morte: {autor.data_falecimento}
            </Typography>
          )}
        </Box>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }} color="primary">
          Livros
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            overflowX: "auto",
            pb: 2,
            justifyContent: "center",
          }}
        >
          {autor.livros && autor.livros.length > 0 ? (
            autor.livros.map((livro) => (
              <Card
                key={livro.id}
                sx={{
                  minWidth: 180,
                  maxWidth: 200,
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={livro.capa}
                  alt={livro.titulo}
                  sx={{
                    width: 100,
                    height: 140,
                    objectFit: "cover",
                    borderRadius: 2,
                    mt: 2,
                    boxShadow: 2,
                  }}
                />
                <CardContent sx={{ textAlign: "center", pt: 2 }}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {livro.titulo}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              Este(a) autor(a) não tem livros associados.
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
    </>
  );
}
