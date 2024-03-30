import { motion, stagger, useAnimate, useInView } from "framer-motion";
import {
  MdEmail,
  MdLocationPin,
  MdPersonPinCircle,
  MdSchool,
} from "../../../icons";
import s from "./index.module.scss";

export const PersonalInfo = (): JSX.Element => {
  const iconsSize = 26;
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.035);

  isInView &&
    animate(
      "li",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.2, delay: staggeredItens },
    );

  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={s.personalInfo_container}
    >
      <h2 className="title2">Estou em busca de uma oportunidade.</h2>
      <p className="title4 height2">
        Olá! Sou Bernardo, um apaixonado por tecnologia e inovação. Atualmente,
        estou me aprofundando no mundo do desenvolvimento, me esforçando para
        expandir meus conhecimentos e habilidades de programação. Meu objetivo é
        ajudar as empresas a alcançarem seus objetivos, transformando idéias em
        realidade com código.
      </p>
      <div>
        <ul ref={scope}>
          <li>
            <p className="text1">
              <MdPersonPinCircle className={s.icon} size={iconsSize} /> Bernardo
              Stein
            </p>
          </li>
          <li>
            <p className="text1">
              <MdSchool className={s.icon} size={iconsSize} />
              Desenvolvedor Full Stack
            </p>
          </li>
          <li>
            <p className="text1">
              <MdEmail className={s.icon} size={iconsSize} />
              dev.bernardo@proton.me
            </p>
          </li>
          <li>
            <p className="text1">
              <MdLocationPin className={s.icon} size={iconsSize} />
              Montenegro, Rio Grande do Sul, Brasil
            </p>
          </li>
        </ul>
      </div>
    </motion.article>
  );
};
