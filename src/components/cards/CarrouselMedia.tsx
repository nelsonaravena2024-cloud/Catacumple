import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  height?: number | string;
  interval?: number;
}

export default function ImageCarousel({
  images,
  height = 360,
  interval = 3000,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
      }}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          component="img"
          src={img}
          alt={`carousel-${index}`}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.8s ease-in-out',
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </Box>
  );
}
