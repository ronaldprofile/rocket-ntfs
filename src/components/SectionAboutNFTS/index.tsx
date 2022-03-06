import { banner2 as MenStyled } from "../../assets";
import { Container, BoxLeft, ContentSection } from "./styles";

export function SectionAboutNFTS() {
  return (
    <Container>
      <div>
        <BoxLeft>
          <div>
            <strong>10K+</strong>
            <span>Artes</span>
          </div>
          <div>
            <strong>200K+</strong>
            <span>Vendas</span>
          </div>
          <div>
            <strong>20</strong>
            <span>Artistas</span>
          </div>
        </BoxLeft>
      </div>

      <ContentSection>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <span>potenti diam</span> et cras
              odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
              nunc semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <span>potenti diam</span> et cras
              odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
              nunc semper.
            </p>

            <a href="#">Lorem ipsum</a>
          </div>
        </div>
        <img src={MenStyled} alt="Homem de oculus estiloso" />
      </ContentSection>
    </Container>
  );
}
