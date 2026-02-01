import { Box } from "@mui/material";
import { motion, MotionValue, useTransform } from "framer-motion";

interface StackCardProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  children: any;
}

export default function StackCard({
  index,
  total,
  scrollYProgress,
  children,
}: StackCardProps) {
  // 🔹 Rango exacto de esta card dentro del scroll total
  const start = index / total;
  const end = (index + 1) / total;

  // 🔹 Progreso de esta card (CLAMPEADO)
  const progress = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1],
    { clamp: true }
  );

  const isLast = index === total - 1;

  // 🔹 Movimiento vertical (la última NO se desplaza)
  const y = useTransform(
    progress,
    [0, 1],
    isLast ? [0, 0] : [0, -120]
  );

  // 🔹 Escala sutil de stack
  const scale = useTransform(
    progress,
    [0, 1],
    isLast ? [1, 1] : [1, 0.95]
  );

  // 🔹 Opacidad (todas se mantienen visibles)
  const opacity = 8;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <motion.div
        style={{
          y,
          scale,
          opacity,
          width: "100%",
          maxWidth: 420,
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
}
