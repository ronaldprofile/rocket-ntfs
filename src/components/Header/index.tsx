import * as I from "../../assets";
import { Navigation } from "../Navigation";
import { Button, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className="wrapper">
        <Logo href="#" title="Logo Rocket NFTs">
          <img src={I.logo} alt="Logo Rocket NFTs" />
        </Logo>

        <Navigation />

        <Button
          whileHover={{
            scale: 1.05,
            background: "transparent",
            color: "#fff",
            border: "1px solid #fff"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <img src={I.logoMetaMask} alt="logo Meta Mask" />
          Conectar Carreira
        </Button>
      </div>
    </Container>
  );
}
