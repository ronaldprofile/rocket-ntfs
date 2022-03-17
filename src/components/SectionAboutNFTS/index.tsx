import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { banner2 as MenStyled } from "../../assets";
import { Container, BoxLeft, ContentSection } from "./styles";

const variants = {
  hidden: { opacity: 0, scale: 0.6 },

  show: (time: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: time * 0.3
    }
  })
};

const textVariants = {
  hidden: { opacity: 0, y: -100 },

  show: (time: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: time * 0.3
    }
  })
};

export function SectionAboutNFTS() {
  const { ref, inView } = useInView();

  return (
    <Container>
      <div>
        <BoxLeft>
          <motion.div
            ref={ref}
            // animate={inView ? "show" : "hidden"}
            variants={variants}
            custom={1}
          >
            <strong>10K+</strong>
            <span>Artes</span>
          </motion.div>
          <motion.div
            ref={ref}
            // animate={inView ? "show" : "hidden"}
            variants={variants}
            custom={1.5}
          >
            <strong>200K+</strong>
            <span>Vendas</span>
          </motion.div>
          <motion.div
            ref={ref}
            // animate={inView ? "show" : "hidden"}
            variants={variants}
            custom={2}
          >
            <strong>20</strong>
            <span>Artistas</span>
          </motion.div>
        </BoxLeft>
      </div>

      <ContentSection>
        <div>
          <motion.div
            ref={ref}
            // animate={inView ? "show" : "hidden"}
            variants={textVariants}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <span>potenti diam</span> et cras
              odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
              nunc semper.
            </p>
            <a href="#">Lorem ipsum</a>
          </motion.div>

          <motion.div
            ref={ref}
            // animate={inView ? "show" : "hidden"}
            variants={textVariants}
            custom={1}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              malesuada amet pretium lacus. Id <span>potenti diam</span> et cras
              odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
              nunc semper.
            </p>

            <a href="#">Lorem ipsum</a>
          </motion.div>
        </div>

        <motion.img
          src={MenStyled}
          alt="Homem de oculus estiloso"
          ref={ref}
          variants={variants}
          // initial="hidden"
          // animate={inView ? "show" : "hidden"}
          custom={3}
        />
      </ContentSection>
    </Container>
  );
}
