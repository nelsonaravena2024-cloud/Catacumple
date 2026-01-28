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
          'public/images/amors.jpg',
          'public/images/fran.jpg',
          'public/images/SofiaReyes.jpg',
        ]}
        />
      </StackCard>
      <StackCard index={1} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Fran Rivera' relacionTItular="Amiga" tituloBackCard="Amiga mia.." descripcionBackCard="Te amo mejor amiga eres la mejor" subtituloBackCard="Eres la mejor amiga deseada uwu" imagenPErsonal={[
          'public/images/amors.jpg',
          'public/images/fran.jpg',
          'public/images/SofiaReyes.jpg',
        ]} />
      </StackCard>
      <StackCard index={2} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          'public/images/amors.jpg',
          'public/images/fran.jpg',
          'public/images/SofiaReyes.jpg',
        ]} />
      </StackCard>
          <StackCard index={3} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          'public/images/amors.jpg',
          'public/images/fran.jpg',
          'public/images/SofiaReyes.jpg',
        ]} />
      </StackCard>
          <StackCard index={4} scrollYProgress={scrollYProgress}>
        <ActionAreaCard nombreTitutar='Nelson Aravena' relacionTItular="Pareja" tituloBackCard="Amor mio" descripcionBackCard="Te amo demasiado feliz cumpleaños" subtituloBackCard="Eres lo mejor" imagenPErsonal={[
          'public/images/amors.jpg',
          'public/images/fran.jpg',
          'public/images/SofiaReyes.jpg',
        ]} />
      </StackCard>

    </Box>
  );
}
