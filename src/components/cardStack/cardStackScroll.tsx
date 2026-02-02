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

  const CARD_COUNT = 5;

  return (
    <Box
      ref={containerRef}
      sx={{
        height: `${CARD_COUNT * 100}vh`,
        px: 1,
        pt: 10,
        
      }}
    >
      <StackCard index={0} total={CARD_COUNT} scrollYProgress={scrollYProgress}>
        <ActionAreaCard
          nombreTitutar="Sofía Reyes"
          relacionTItular="Mamá"
          tituloBackCard="Hija mía.."
          descripcionBackCard="Te amo demasiado feliz cumpleaños"
          subtituloBackCard="Te amo mucho hija.."
          imagenPErsonal={[
            "/images/SofiaReyes3.jpg",
            "/images/SofiaReyes2.jpg",
            "/images/SofiaReyes.jpg",
          ]}
        />
      </StackCard>

      <StackCard index={1} total={CARD_COUNT} scrollYProgress={scrollYProgress}>
        <ActionAreaCard
          nombreTitutar="Johana Lillo"
          relacionTItular="Prima y hermana"
          tituloBackCard="Feliz cumpleaños, mi querida Catalina 🎂✨"
          descripcionBackCard={`Hoy celebro mucho más que tu cumpleaños: celebro tu vida, tu historia y la mujer increíble que eres. Para mí no eres solo mi prima, eres mi hermana del alma. 
            
            Tu fortaleza me inspira, tu constancia me enseña y tu garra me recuerda que siempre se puede seguir adelante, incluso cuando el camino se vuelve cuesta arriba. 
            
            Admiro profundamente la forma en que amas a tu familia, cómo cuidas, sostienes y das sin medida. Has sabido levantarte una y otra vez, con valentía, con coraje y con un corazón enorme. 
            
            Gracias por ser ejemplo, por no rendirte, por creer y seguir avanzando. Quiero que nunca olvides cuánto te amo y cuánto te admiro, y lo orgullosa que estoy de ti. Que la vida te devuelva multiplicado todo el amor que entregas. Mereces lo mejor hoy y siempre.`} 
          subtituloBackCard="Catalina, admiro tu fortaleza y tu gran corazón."
          imagenPErsonal={["/images/Johana.jpg"]}
        />
      </StackCard>

      <StackCard index={2} total={CARD_COUNT} scrollYProgress={scrollYProgress}>
        <ActionAreaCard
          nombreTitutar="Nelson Aravena"
          relacionTItular="Pareja"
          tituloBackCard="Amor mio.."
          descripcionBackCard="Feliz cumpleaños, amor mío 💖. Cada día a tu lado es un regalo, y hoy quiero celebrar todo lo maravilloso que eres. Que este nuevo año de vida te traiga tanta alegría como la que tú me das a mí."
          subtituloBackCard="Te amo infinitamente <3"
          imagenPErsonal={[
            "/images/amors.jpg",
            "/images/amors2.jpg",
            "/images/amors3.png",
          ]}
        />
      </StackCard>

      <StackCard index={3} total={CARD_COUNT} scrollYProgress={scrollYProgress}>
        <ActionAreaCard
          nombreTitutar="Jose Rojas"
          relacionTItular="Hermano Menor"
          tituloBackCard="Hermana mia.."
          descripcionBackCard="Te qro mucho catu Gracias por apañar tanto y soportarnos tanto"
          subtituloBackCard="Eres la mejor"
          imagenPErsonal={[
            "/images/JoseReyes.jpg",
            "/images/JoseReyes2.jpg",
          ]}
        />
      </StackCard>

      <StackCard index={4} total={CARD_COUNT} scrollYProgress={scrollYProgress}>
        <ActionAreaCard
          nombreTitutar="Pablo Rojas"
          relacionTItular="Hermano Medio"
          tituloBackCard="Hermana mia.."
          descripcionBackCard="24.500-03 para pa para pa para"
          subtituloBackCard="Emperadora de los ositos uwu"
          imagenPErsonal={[
            "/images/PabloRojas.jpg",
            "/images/PabloRojas2.jpg",
            "/images/PabloRojas3.jpeg",
          ]}
        />
      </StackCard>
    </Box>
  );
}
