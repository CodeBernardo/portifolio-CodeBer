import { useLanguageContext } from "../../../../providers/langContext";
import { FaDatabase } from "../../../icons";
import s from "./index.module.scss"

export const BackEndServiceCard = (): JSX.Element => {
  const {t} = useLanguageContext()
  return (
    <div className={s.serviceCard_container}>
      <FaDatabase size={42} className={s.icon} />
      <div className={s.info_container}>
        <h3 className="title3">{t("home.section3.stack2")}</h3>
        <p className="text1 height2">{t("home.section3.stack2Text")}</p>
      </div>
    </div>
  );
};
