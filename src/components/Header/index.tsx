import * as I from "../../assets";
import { Navigation } from "../Navigation";
import { Button, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="wrapper">
        <Logo href="#" title="Logo Rocket NFTs">
          <img src={I.logo} alt="Logo Rocket NFTs" />
        </Logo>

        <Navigation />

        <Button as="a">
          <img src={I.logoMetaMask} alt="logo Meta Mask" />
          Conectar Carreira
        </Button>
      </div>
    </Container>
  );
}
