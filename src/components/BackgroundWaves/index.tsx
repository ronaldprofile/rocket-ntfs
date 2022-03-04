import { ReactNode } from "react";
import { Container } from "./styles";

interface BackgroundWavesProps {
  children: ReactNode;
}

export function BackgroundWaves({ children }: BackgroundWavesProps) {
  return <Container>{children}</Container>;
}
