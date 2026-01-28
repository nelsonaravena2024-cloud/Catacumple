import { Box, Typography, Paper, Container } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import Confetti from 'react-confetti';
import { useWindowSize } from 'usehooks-ts';
import CardStackScroll from './components/cardStack/cardStackScroll';
import TenorGif from './components/TenorGifProps';
import { Heart, Smile, Star, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const { width = 0, height = 0 } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      <Confetti width={width} height={height} />
      
      {/* 🎨 UN SOLO COLOR DE FONDO */}
      <Box sx={{ 
        minHeight: '100vh', 
        background: '#f0d8de', // ← Color único limpio
        overflowX: 'hidden',
        position: 'relative'
      }}>
        
        {/* SECCIÓN 1 - Hero */}
        <Parallax speed={isMobile ? 0 : 2}>
          <Container maxWidth="lg">
            <Box
              component="section"
              sx={{
                minHeight: '100vh',
                display: 'grid',
                placeItems: 'center',
                py: 8,
                textAlign: 'center',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                <Paper
                  elevation={24}
                  sx={{
                    p: { xs: 6, md: 12 },
                    borderRadius: 5,
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,255,0.9))',
                    maxWidth: 900,
                    mx: 'auto',
                    boxShadow: '0 35px 80px -20px rgba(0,0,0,0.15)',
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.8rem', sm: '4rem', md: '6rem' },
                      fontWeight: 900,
                      lineHeight: 1,
                      mb: 4,
                      background: 'linear-gradient(45deg, #ab47bc, #f06292)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    ¡Feliz Cumpleaños Catalina!
                  </Typography>

                  <Box sx={{ mb: 8 }}>
                    <TenorGif postId='13075701364502190632' />
                  </Box>

                  <Typography variant="h2" sx={{ fontSize: { xs: '5rem', md: '8rem' }, mb: 4 }}>
                    🎂
                  </Typography>

                  <Typography variant="h4" sx={{ color: '#7b1fa2', fontSize: { xs: '1.3rem', md: '2rem' }, maxWidth: 700, mx: 'auto' }}>
                    Un día <strong>¡ESPECIAL!</strong> para una persona <em>¡INCREÍBLE!</em>
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          </Container>
        </Parallax>

        {/* SECCIÓN 2 */}
        <Container maxWidth="lg" sx={{ py: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={16}
              sx={{
                p: { xs: 6, md: 10 },
                borderRadius: 5,
                background: 'white',
                boxShadow: '0 25px 50px -15px rgba(0,0,0,0.1)',
                mx: 'auto',
                maxWidth: 900,
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'center' }}>
                <Typography variant="h1" sx={{ fontSize: { xs: '4rem', lg: '6rem' }, color: '#ab47bc', fontWeight: 900 }}>
                  💝
                </Typography>
                <Typography variant="h4" sx={{ color: '#7b1fa2', fontSize: { xs: '1.5rem', lg: '2.2rem' }, lineHeight: 1.5, flex: 1 }}>
                  Estos son los <strong>deseos</strong> y <strong>percepciones</strong> que tiene la gente de ti. 
                  <br />
                  <em>Cada mensaje viene del corazón de quienes te aprecian.</em>
                </Typography>
              </Box>
            </Paper>
          </motion.div>
        </Container>

        {/* SECCIÓN 3 - Cards */}
      <Box
              component="section"
              sx={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center',
                px: { sm: 4, md: 8 },
              }}
            >
            <CardStackScroll/>
            </Box>
            

        {/* SECCIÓN 4 */}
        <Container maxWidth="lg" sx={{ py: 20 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: '#ab47bc',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 4,
                textAlign: 'center',
              }}
            >
              💝
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#7b1fa2',
                fontSize: { xs: '1.3rem', md: '2rem' },
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                mb: 12,
              }}
            >
              Estas son las palabras con las que los demás te aprecian
            </Typography>
          </motion.div>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', maxWidth: 1000 }}>
            {[
              { icon: Heart, color: '#f06292', title: 'Amorosa', desc: 'Tierna, Cariñosa' },
              { icon: Star, color: '#ffd54f', title: 'Brillante', desc: 'Inteligente, Creativa' },
              { icon: Smile, color: '#ff9800', title: 'Alegre', desc: 'Divertida, Positiva' },
              { icon: Gift, color: '#e91e63', title: 'Generosa', desc: 'Amable, Solidaria' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: 5,
                    borderRadius: 4,
                    minWidth: 160,
                    textAlign: 'center',
                    background: 'white',
                    boxShadow: '0 15px 35px -10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 25px 50px -15px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <item.icon 
                    size={56} 
                    style={{ 
                      color: item.color, 
                      margin: '0 auto 16px',
                      display: 'block' 
                    }} 
                  />
                  <Typography 
                    variant="h5" 
                    fontWeight={800} 
                    gutterBottom 
                    sx={{ color: '#ab47bc', mb: 2 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ fontSize: '1.1rem' }}
                  >
                    {item.desc}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
