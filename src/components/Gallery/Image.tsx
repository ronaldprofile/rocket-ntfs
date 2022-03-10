import { motion } from "framer-motion";
import { HTMLProps } from "react";

interface ImageProps extends HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
  customDelay?: number;
}

export function Image({ src, alt, customDelay }: ImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      title="Arrastar a Imagem causa um efeito especial."
      drag
      dragConstraints={{
        left: 0,
        top: 10,
        bottom: 10,
        right: 0
      }}
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: customDelay! * 0.3 }
      }}
    />
  );
}
