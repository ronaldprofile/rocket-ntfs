import { AstronautCard } from "../AstronautCard";

import * as I from "../../assets";
import * as S from "./styles";

export function SectionPopularWeek() {
  return (
    <S.Container>
      <div className="wrapper">
        <h2>
          <strong>Populares</strong> da semana
        </h2>

        <S.ContainerAstronauts>
          <S.Column>
            <AstronautCard
              title="Astronaut 1"
              astronautName="Mayk Brito"
              astronautImage={I.astronaut1}
              rkt="1.50"
            />

            <AstronautCard
              title="Astronaut 3"
              astronautName="João Inácio (biro)"
              astronautImage={I.astronaut2}
              rkt="3.75"
            />
          </S.Column>

          <S.Divider />

          <S.Column>
            <AstronautCard
              title="Astronaut 2"
              astronautName="Jakeliny Gracielly"
              astronautImage={I.astronaut3}
              rkt="2.0"
            />

            <AstronautCard
              title="Astronaut 4"
              astronautName="Tamires Santos"
              astronautImage={I.astronaut4}
              rkt="4.30"
            />
          </S.Column>
        </S.ContainerAstronauts>
      </div>
    </S.Container>
  );
}
