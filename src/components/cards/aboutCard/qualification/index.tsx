import { motion } from "framer-motion";
import { EducationList } from "./educationList";
import { ExperiencesList } from "./experiencesList";
import s from "./index.module.scss"
import { useLanguageContext } from "../../../../providers/langContext";

export const Qualifications = (): JSX.Element => {
  const {t} = useLanguageContext()
  return (
    <motion.article
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={s.qualifications_article}
    >
      <h2 className="title2">{t("home.section2.qualification.title")}</h2>
      <div className={s.qualifications_container}>
        <EducationList />
        <ExperiencesList />
      </div>
    </motion.article>
  );
};
