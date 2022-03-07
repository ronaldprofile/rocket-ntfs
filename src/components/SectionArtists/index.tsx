import * as I from "../../assets";

import { ArtistCard } from "../ArtistCard";
import { Column, Container, ContainerArtists } from "./styles";

export function SectionArtists() {
  return (
    <Container>
      <div className="wrapper">
        <h2>
          Melhores <span>Artistas</span>
        </h2>

        <ContainerArtists>
          <Column>
            <ArtistCard
              username="Mayk Brito"
              total_photographs="80"
              avatar_image={I.artist1}
            />

            <ArtistCard
              username="Tamires Santos"
              total_photographs="40"
              avatar_image={I.artist4}
            />
          </Column>

          <Column>
            <ArtistCard
              username="Jaqueline G."
              total_photographs="100"
              avatar_image={I.artist2}
              isFeaturedArtist
            />

            <ArtistCard
              username="Ana Silva"
              total_photographs="28"
              avatar_image={I.artist5}
            />
          </Column>

          <Column>
            <ArtistCard
              username="João I. (Biro)"
              total_photographs="50"
              avatar_image={I.artist3}
            />

            <ArtistCard
              username="Diego F."
              total_photographs="20"
              avatar_image={I.artist6}
            />
          </Column>
        </ContainerArtists>

        <a href="#">
          Ver todos os artistas
          <img src={I.arrowOrange} alt="arrow orange" />
        </a>
      </div>
    </Container>
  );
}
