import { useEffect } from "react";

interface TenorGifProps {
  postId: string;
  aspectRatio?: number;
}

export default function TenorGif({
  postId,
  aspectRatio = 0.9,
}: TenorGifProps) {
  useEffect(() => {
    // Evita cargar el script más de una vez
    if (!document.querySelector('script[src="https://tenor.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://tenor.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="tenor-gif-embed"
      data-postid={postId}
      data-share-method="host"
      data-aspect-ratio={aspectRatio}
      data-width="100%"
    />
  );
}
