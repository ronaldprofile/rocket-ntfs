import { LinkAnimated } from "../../styles/global";
import { Container } from "./styles";

export function Navigation() {
  return (
    <Container>
      <ul>
        <li>
          <LinkAnimated href="#">Comprar NFT</LinkAnimated>
        </li>
        <li>
          <LinkAnimated href="#">Sobre</LinkAnimated>
        </li>
        <li>
          <LinkAnimated href="#">FAQ</LinkAnimated>
        </li>
      </ul>
    </Container>
  );
}
