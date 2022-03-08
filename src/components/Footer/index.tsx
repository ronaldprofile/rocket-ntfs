import { useCallback } from "react";
import { LinkAnimated } from "../../styles/global";
import * as I from "../../assets";
import * as F from "./styles";

export function Footer() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <F.Container>
      <F.Brand>
        <div className="wrapper">
          <img src={I.logo} alt="Logo Rocket NFTs" />

          <a href="#" onClick={scrollToTop} title="Voltar ao topo">
            <img src={I.arrowBlack} alt="arrow black" />
          </a>
        </div>
      </F.Brand>

      <F.FooterMain>
        <div className="wrapper">
          <F.Newsletter>
            <h3>
              Fique por dentro de
              <span> todas as novidades</span>
            </h3>

            <form autoComplete="off">
              <label htmlFor="email">Seu E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="nft@rocketseat.com.br"
                required
              />

              <button type="submit">Enviar</button>
            </form>
          </F.Newsletter>

          <F.Divider />

          <nav>
            <ul>
              <span>Empresa</span>
              <li>
                <LinkAnimated href="#">Sobre</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Serviços</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Time</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Carreira</LinkAnimated>
              </li>
            </ul>
            <ul>
              <span>Mapa</span>
              <li>
                <LinkAnimated href="#">Galeria</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Populares</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Vendas</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Contato</LinkAnimated>
              </li>
            </ul>
            <ul>
              <span>Links</span>
              <li>
                <LinkAnimated href="#">FAQs</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Termos</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Política</LinkAnimated>
              </li>
              <li>
                <LinkAnimated href="#">Ajuda</LinkAnimated>
              </li>
            </ul>
          </nav>
        </div>
      </F.FooterMain>

      <F.FooterBottom>
        <div className="wrapper">
          <LinkAnimated
            href="https://rocketseat.com.br"
            target="_blank"
            className="link-animated"
          >
            www.rocketseat.com
          </LinkAnimated>

          <F.SocialsNetworks>
            <ul>
              <li>
                <a href="#">
                  <img src={I.instagramIcon} alt="Instagram icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={I.twitterIcon} alt="twitter icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={I.youtubeIcon} alt="Youtube icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={I.emailIcon} alt="email icon" />
                </a>
              </li>
            </ul>
          </F.SocialsNetworks>
        </div>
      </F.FooterBottom>
    </F.Container>
  );
}
