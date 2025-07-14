import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ScrollSection = ({ title, items }) => (
  <Box sx={{ my: 4 }}>
    <Typography variant="h5" sx={{ mb: 2 }}>
      {title}
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxHeight: 300,
        overflowY: 'auto',
        pr: 1,
      }}
    >
      {items.map((item, index) => (
        <Card key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <CardMedia
            component="img"
            sx={{ width: 80, height: 100, objectFit: 'cover' }}
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography variant="subtitle1">{item.title}</Typography>
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
    { title: 'Dom Quixote', subtitle: 'Miguel de Cervantes', image: 'https://i.imgur.com/t9qkeD1.jpeg' },
    { title: 'Os Maias', subtitle: 'Eça de Queirós', image: 'https://i.imgur.com/t9qkeD1.jpeg' },
    // adicionar mais livros
  ];

  const autores = [
    { title: 'Clarice Lispector', subtitle: 'Brasileira', image: 'https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand' },
    { title: 'Fernando Pessoa', subtitle: 'Português', image: 'https://i.imgur.com/8SZgkct_d.webp?maxwidth=760&fidelity=grand' },
    // adicionar mais autores
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        GS - Books
      </Typography>
      <ScrollSection title="Livros em Destaque" items={livros} />
      <ScrollSection title="Autores" items={autores} />
    </Box>
  );
};

export default LibraryHomePage;
