import { Box, Button, Card, CardContent, Typography, Divider, CardMedia } from '@mui/material';
import { Gift, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from './CarrouselMedia';

const MotionBox = motion(Box);

interface textForCard {
  nombreTitutar: string;
  relacionTItular: string;
  tituloBackCard: string;
  descripcionBackCard: string;
  subtituloBackCard: string;
  imagenPErsonal: string[];
}


export default function ActionAreaCard({ nombreTitutar, relacionTItular, tituloBackCard, descripcionBackCard, subtituloBackCard, imagenPErsonal }: textForCard) {
  const [flipped, setFlipped] = useState(false);

  return (
    // ← ELIMINADO: Box exterior que causaba el fondo estático
    <>
      {/* Contenedor con perspectiva - AHORA ES EL RAÍZ */}
      <MotionBox
        sx={{
          width: 350,
          height: 630,
          perspective: 1000,
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#fefeff',
          alignItems: 'center',
        }}
        onClick={() => setFlipped((prev) => !prev)}
      >
        {/* Contenedor que rota */}
        <MotionBox
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* FRONT - CON IMAGEN */}
          <Card
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              backfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#fefeff'
            }}
          >
            <CardMedia sx={{ flexShrink: 0 }}>
              <ImageCarousel images={imagenPErsonal} height={360} />
            </CardMedia>

            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 2,
                p: 2,
              }}
            >
              <Divider sx={{ width: '60%' }}>
                <Gift color='#FF7F3B' />
              </Divider>

              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Playfair Display', color: '#2a1f19' }}>
                ¡Feliz Cumpleaños!
              </Typography>
              <Typography variant="body1" color="#2a1f19">
                Por parte de: {nombreTitutar}
              </Typography>
              <Typography variant="body1" color="#2a1f19">
                Relación: {relacionTItular}
              </Typography>

              <Button
                variant="text"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(true);
                }}
              >
                <Typography variant="body2" color="#2a1f19">
                  <Heart size={18} /> Toca para ver tu sorpresa <Heart size={18} />
                </Typography>
              </Button>
            </CardContent>
          </Card>

          {/* BACK - SIN IMAGEN */}
          <Card
            sx={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              transform: 'rotateY(180deg)',
              backfaceVisibility: 'hidden',
              bgcolor: '#fefeff'
            }}
          >
            <CardContent
              sx={{
                height: '100%',
                display: 'grid', // ← Corregido: flex en lugar de grid
                flexDirection: 'column',
                alignItems: 'start', // ← Centrado
                justifyContent: 'center',
                textAlign: 'center',
                gap: 3,
                p: 4,
              }}
            >
              <Box>
                <Typography variant="body1" sx={{ mt: 2, display: 'flex', gap: 1, color: '#2a1f19' }}>
                  <Sparkles color='#FF7F3B' /> ¡UN MENSAJE ESPECIAL! <Sparkles color='#FF7F3B' />
                </Typography>
                <Typography variant="h4" sx={{ maxWidth: 280, mt: 4, fontFamily: 'Playfair Display', color: '#2a1f19' }}>
                  {tituloBackCard}
                </Typography>

                <Typography variant="h6" sx={{ mt: 2, color: '#2a1f19', textAlign: 'center' }}>
                  {descripcionBackCard}
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Heart color='pink' />

                  <Typography variant='h6' sx={{ fontFamily: 'Playfair Display', color: '#FF7F3B', fontStyle: 'italic' }}>
                    {subtituloBackCard}
                  </Typography>
                </Box>
              </Box>

              <Button
                sx={{ mb: 6 }}
                variant="text"
                onClick={(e) => {
                  e.stopPropagation();
                  setFlipped(false);
                }}
              >
                <Typography variant="body2" color="#2a1f19" sx={{ display: 'flex', gap: 1 }}>
                  <Heart size={18} /> Volver al mensaje <Heart size={18} />
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </MotionBox>
      </MotionBox>
    </>
  );
}
