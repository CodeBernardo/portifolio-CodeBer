import { hardSkillsList } from "../../../../data";
import s from "./index.module.scss";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const SkillsList = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.025);

  isInView &&
    animate(
      "li",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.1, delay: staggeredItens },
    );

  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={s.skills_container}
    >
      <h2 className="title2">Meu conjunto de habilidades</h2>
      <h3 className="title3">Tecnologias</h3>
      <ul ref={scope} className={s.techs_container}>
        {hardSkillsList.map((skill, i) => (
          <li className={skill.name} key={i}>
            {skill.icon}
          </li>
        ))}
      </ul>
      <h3 className="title3">Habilidades comportamentais</h3>
      <ul>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0 }}
          className="text1"
        >
          Comunicação
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="text1"
        >
          Criatividade
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className="text1"
        >
          Trabalho em equipe
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.3 }}
          className="text1"
        >
          Aprendizado contínuo
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.4 }}
          className="text1"
        >
          Organização
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.5 }}
          className="text1"
        >
          Metodologias ágeis
        </motion.li>
      </ul>
      <h3 className="title3">Idiomas</h3>
      <ul>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.6 }}
          className="text1"
        >
          Português nativo
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.7 }}
          className="text1"
        >
          Inglês intermediário
        </motion.li>
      </ul>
    </motion.article>
  );
};
