import { Gallery } from "../Gallery";
import { badge, groupArtists } from "../../assets";
import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <S.SectionIntro>
        <div className="wrapper">
          <div className="box">
            <p>
              Mercado digital para colecionáveis em criptos e tokens não
              fungível (NFT). Compre, venda e descubra ativos digitais
              exclusivos para você.
            </p>

            <div className="users">
              <img src={groupArtists} alt="Grupo de Artistas" />

              <span>
                <strong>+10</strong>
                <span> Artistas Selecionados</span>
              </span>
            </div>
          </div>

          <h1>
            Descubra a verdadeira arte digital e colecione diversas
            <strong> NFTs</strong>
          </h1>

          <img src={badge} alt="badge Rocket" />
        </div>
      </S.SectionIntro>

      <S.SectionGallery>
        <Gallery />
      </S.SectionGallery>
    </S.Container>
  );
}
