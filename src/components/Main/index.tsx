import { motion } from "framer-motion";
import { Gallery } from "../Gallery";
import { ButtonCustom } from "../Button";

import { ArrowRightIcon } from "../../styles/icons";
import { badge, groupArtists } from "../../assets";
import * as S from "./styles";

export function Main() {
  return (
    <S.Container>
      <S.SectionIntro>
        <div className="wrapper">
          <motion.div
            className="box"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          >
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

            <ButtonCustom>
              Conectar carreira
              <div>
                <ArrowRightIcon width={28} height={28} />
              </div>
            </ButtonCustom>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          >
            Descubra a verdadeira arte digital e colecione diversas
            <strong> NFTs</strong>
          </motion.h1>

          <motion.div id="badge">
            <motion.img
              src={badge}
              alt="Badge Rocket NFTs"
              style={{
                width: 200,
                height: 200
              }}
              animate={{ rotate: 360 }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity
              }}
            />
          </motion.div>
        </div>
      </S.SectionIntro>

      <S.SectionGallery>
        <Gallery />
      </S.SectionGallery>
    </S.Container>
  );
}
