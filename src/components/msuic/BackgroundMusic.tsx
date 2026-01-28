// BackgroundMusic.tsx
import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  src: string;        // Ruta del audio
  volume?: number;    // Opcional, 0 a 1
  loop?: boolean;     // Opcional, si quieres que repita
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ src, volume = 0.5, loop = true }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.volume = volume;
    audio.loop = loop;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.warn("Reproducción automática bloqueada, espera interacción del usuario.");
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [src, volume, loop]);

  return null; // No necesitamos renderizar nada
};

export default BackgroundMusic;
