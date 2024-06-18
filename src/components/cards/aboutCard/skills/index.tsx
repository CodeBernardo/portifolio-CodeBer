import { hardSkillsList } from "../../../../data";
import { useLanguageContext } from "../../../../providers/langContext";
import s from "./index.module.scss";
import { motion, stagger, useAnimate, useInView } from "framer-motion";

export const SkillsList = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.025);
  const {t} = useLanguageContext()

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
      <h2 className="title2">{t("home.section2.skills.title")}</h2>
      <h3 className="title3">{t("home.section2.skills.techs")}</h3>
      <ul ref={scope} className={s.techs_container}>
        {hardSkillsList.map((skill, i) => (
          <li className={skill.name} key={i}>
            {skill.icon}
            <small>{skill.name}</small>
          </li>
        ))}
      </ul>
      <h3 className="title3">{t("home.section2.skills.softSkills")}</h3>
      <ul>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0 }}
          className="text1"
        >
          {t("home.section2.skills.skill1")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.1 }}
          className="text1"
        >
          {t("home.section2.skills.skill2")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.2 }}
          className="text1"
        >
          {t("home.section2.skills.skill3")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.3 }}
          className="text1"
        >
          {t("home.section2.skills.skill4")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.4 }}
          className="text1"
        >
          {t("home.section2.skills.skill5")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.5 }}
          className="text1"
        >
          {t("home.section2.skills.skill6")}
        </motion.li>
      </ul>
      <h3 className="title3">{t("home.section2.languages")}</h3>
      <ul>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.6 }}
          className="text1"
        >
          {t("home.section2.pt")}
        </motion.li>
        <motion.li
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.1, delay: 0.7 }}
          className="text1"
        >
          {t("home.section2.en")}
        </motion.li>
      </ul>
    </motion.article>
  );
};
