import { Card } from "@mui/material";
import { motion, useTransform, MotionValue } from "framer-motion";

const MotionCard = motion(Card);

interface StackCardProps {
  index: number;
  scrollYProgress: MotionValue<number>;
  children: any;
}

export default function StackCard({
  index,
  scrollYProgress,
  children,
}: StackCardProps) {
  const scale = useTransform(
    scrollYProgress,
    [index * 0.15, 1],
    [1, 0.85]
  );

  const y = useTransform(
    scrollYProgress,
    [index * 0.25, 1],
    [0, -120]
  );



  return (
    <MotionCard
      elevation={6}
      style={{
        scale,
        y,
        position: "sticky",
        top: 60,
        borderRadius: 15,
        marginBottom: 140,
      }}
    >
      {children}
    </MotionCard>
  );
}
