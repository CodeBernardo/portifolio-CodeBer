import { motion, stagger, useAnimate, useInView } from "framer-motion";
import {
  MdEmail,
  MdLocationPin,
  MdPersonPinCircle,
  MdSchool,
} from "../../../icons";
import s from "./index.module.scss";
import { useLanguageContext } from "../../../../providers/langContext";

export const PersonalInfo = (): JSX.Element => {
  const iconsSize = 26;
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.035);
  const {t} = useLanguageContext()

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
      <h2 className="title2">{t("home.section2.information.copyTitle")}</h2>
      <p className="title4 height2">
        {t("home.section2.information.copyText")}
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
              {t("generics.stack")}
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
