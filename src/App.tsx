import { useState } from 'react'
import { Box, Container, Paper, Typography, IconButton } from '@mui/material'
import './App.css'
import { Parallax } from 'react-scroll-parallax'
import Confetti from 'react-confetti'
import { useWindowSize } from 'usehooks-ts'
import CardStackScroll from './components/cardStack/cardStackScroll'
import TenorGif from './components/TenorGifProps'
import { motion } from 'framer-motion'
import { Gift, Heart, Trophy, BicepsFlexed, Flower2 } from 'lucide-react'
import BackgroundMusic from './components/msuic/BackgroundMusic'

function App() {
  const { width = 0, height = 0 } = useWindowSize()
  const isMobile = width < 768

  const [showApp, setShowApp] = useState(false)
  const [playMusic, setPlayMusic] = useState(false)

  const handleGiftClick = () => {
    setShowApp(true)
    setPlayMusic(true)
  }

  if (!showApp) {
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          onClick={handleGiftClick}
          sx={{
            color: '#fff',
            '&:hover': { transform: 'scale(1.2)', transition: '0.3s' },
          }}
        >
          <Gift size={128} />
        </IconButton>
      </Box>
    )
  }

  return (
    <>
      <Confetti width={width} height={height} />

      {playMusic && <BackgroundMusic src="/musica-fondo.mp3" volume={0.6} loop />}

      <Parallax speed={isMobile ? 0 : 2}>
        <Box
          component="section"
          sx={{
            minHeight: '100vh',
            display: 'grid',
            mt: 3,
            placeItems: 'center',
            px: { xs: 2, sm: 4 },
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Box
              sx={{
                display: 'grid',
                justifyItems: 'center',
                gap: { xs: 2, sm: 4 },
              }}
            >
              <Typography
                sx={{
                  color: '#ab47bc',
                  fontSize: { xs: '3rem', sm: '3rem', md: '4rem' },
                  fontWeight: 900,
                }}
              >
                ¡Feliz Cumpleaños Catalina!
              </Typography>

              <TenorGif postId="13075701364502190632" />

              <Typography
                sx={{
                  fontSize: { xs: '5rem', sm: '4rem', md: '5rem' },
                }}
              >
                🎂
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  color: '#7b1fa2',
                  fontSize: { xs: '1.3rem', md: '2rem' },
                  maxWidth: 700,
                  mx: 'auto',
                }}
              >
                Un día <strong>único y mágico</strong> para una persona <em>maravillosa, que ilumina la vida de todos quienes la rodean</em>.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Parallax>

      {/* Sección 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Box
          component="section"
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 6, alignItems: 'center' }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '4rem', lg: '6rem' }, color: '#ab47bc', fontWeight: 900 }}>
              💝
            </Typography>
            <Typography variant="h2" sx={{ color: '#7b1fa2', fontSize: { xs: '1.5rem', lg: '2.2rem' }, lineHeight: 1.5, flex: 1 }}>
              Estos son los <strong>deseos más sinceros</strong> y los <strong>sentimientos profundos</strong> que todos tenemos por ti.
              Cada palabra refleja el amor y la admiración que sentimos por tu increíble forma de ser!.
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <Box
        component="section"
        sx={{
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CardStackScroll />
      </Box>


      {/* Sección 3 */}
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
            {
              icon: Trophy,
              color: '#f06292',
              title: 'Luchona',
              desc: 'No se rinde ante las dificultades y siempre sigue adelante, incluso cuando el camino se vuelve cuesta arriba.'
            },
            {
              icon: BicepsFlexed,
              color: '#ffd54f',
              title: 'Coraje',
              desc: 'Enfrenta los desafíos con valentía y determinación, tomando decisiones firmes incluso en los momentos más difíciles.'
            },
            {
              icon: Flower2,
              color: '#ff9800',
              title: 'Resiliencia',
              desc: 'Tiene la capacidad de levantarse una y otra vez, transformando las caídas en aprendizaje y crecimiento.'
            },
            {
              icon: Heart,
              color: '#e91e63',
              title: 'Amorosa',
              desc: 'Entrega cariño sincero y apoyo incondicional, haciendo sentir amados y acompañados a quienes la rodean.'
            },


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

        <Box sx={{ mt: 25 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                mt: 14,
                textAlign: 'center',
                px: { xs: 2, sm: 4 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: '#ab47bc',
                  fontWeight: 800,
                  mb: 3,
                }}
              >
                💖 Gracias infinitas
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#7b1fa2',
                  maxWidth: 800,
                  mx: 'auto',
                  fontSize: '1.15rem',
                  lineHeight: 1.8,
                }}
              >
                Nada de esto habría sido posible sin las personas que pusieron su tiempo,
                su cariño y su corazón para crear esta sorpresa.
                <br /><br />
                💕
              </Typography>
            </Box>
          </motion.div>

        </Box>
      </Container>
    </>
  )
}

export default App
