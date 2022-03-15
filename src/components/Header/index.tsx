import { Navigation } from "../Navigation";
import { ButtonCustom } from "../Button";
import { HamburgerMenuIcon } from "../../styles/icons";

import * as I from "../../assets";
import * as H from "./styles";

export function Header() {
  return (
    <H.Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <div className="wrapper">
        <H.Logo href="#" title="Logo Rocket NFTs">
          <img src={I.logo} alt="Logo Rocket NFTs" />
        </H.Logo>

        <Navigation />

        <ButtonCustom>
          <img src={I.logoMetaMask} alt="logo Meta Mask" />
          Conectar Carreira
        </ButtonCustom>

        <H.MenuButtons>
          <button id="menu">
            <HamburgerMenuIcon />
          </button>
        </H.MenuButtons>
      </div>
    </H.Container>
  );
}
