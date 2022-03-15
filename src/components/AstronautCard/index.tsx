import { ArrowTopRightIcon } from "../../styles/icons";
import * as A from "./styles";

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
    <A.Container>
      <A.Heading>
        <div className="astronaut-title">
          <span>{title}</span>
          <ArrowTopRightIcon />
        </div>

        <div className="astronaut-info">
          <strong>{astronautName}</strong>
          <span>{rkt} RKT</span>
        </div>
      </A.Heading>

      <A.AstronautImage src={astronautImage} alt="Astronauta" />
    </A.Container>
  );
}
