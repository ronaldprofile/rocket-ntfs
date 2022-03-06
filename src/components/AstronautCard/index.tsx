import { arrowWhite } from "../../assets";
import { Container, Heading } from "./styles";

interface AstronautCardProps {
  astronautName: string;
  astronautImage: string;
  title: string;
  rkt: string;
}

export function AstronautCard({
  astronautImage,
  astronautName,
  rkt,
  title
}: AstronautCardProps) {
  return (
    <Container>
      <Heading>
        <div>
          <span>{title}</span>
          <img src={arrowWhite} alt="arrow white" />
        </div>

        <div>
          <strong>{astronautName}</strong>
          <span>{rkt} RKT</span>
        </div>
      </Heading>

      <img src={astronautImage} alt="Astronauta" />
    </Container>
  );
}
