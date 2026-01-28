import { Box } from "@mui/material";
import { useRef } from "react";
import { useScroll } from "framer-motion";

import StackCard from "./StackCard";
import ActionAreaCard from "../cards/DefaultCard";

export default function CardStackScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "500vh",
        px: 2,
        pt: 15,
      }}
    >
      <StackCard index={0} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Sofía Reyes' relacionTItular="Mamá" tituloBackCard="Hija mía.." descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Te amo mucho" imagenPErsonal={[
          '/images/amors.jpg',
          '/images/fran.jpg',
          '/images/SofiaReyes.jpg',
        ]}
        />
      </StackCard>
      <StackCard index={1} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Fran Rivera' relacionTItular="Amiga" tituloBackCard="Amiga mia.." descripcionBackCard="Te amo mejor amiga eres la mejor" subtituloBackCard="Eres la mejor amiga deseada uwu" imagenPErsonal={[
          '/images/fran.jpg',
          '/images/fran2.jpg',
          '/images/fran3.jpg',
        ]} />
      </StackCard>
      <StackCard index={2} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Feliz cumpleaños, amor mío 💖. Cada día a tu lado es un regalo, y hoy quiero celebrar todo lo maravilloso que eres. Que este nuevo año de vida te traiga tanta alegría como la que tú me das a mí." subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          '/images/amors.jpg',
          '/images/amors2.jpg',
          '/images/amors3.png',
        ]} />
      </StackCard>
      <StackCard index={3} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          '/images/amors.jpg',
          '/images/fran.jpg',
          '/images/SofiaReyes.jpg',
        ]} />
      </StackCard>
      <StackCard index={4} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          '/images/amors.jpg',
          '/images/fran.jpg',
          '/images/SofiaReyes.jpg',
        ]} />
      </StackCard>

    </Box>
  );
}
