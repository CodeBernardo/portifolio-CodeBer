import { useLanguageContext } from "../../../../providers/langContext";
import { FaCode } from "../../../icons";
import s from "./index.module.scss"

export const FrontEndServiceCard = (): JSX.Element => {
  const {t} = useLanguageContext()
  return (
    <div className={s.serviceCard_container}>
      <FaCode size={52} className={s.icon} />
      <div className={s.info_container}>
        <h3 className="title3">{t("home.section3.stack1")}</h3>
        <p className="text1 height2">{t("home.section3.stack1Text")}</p>
      </div>
    </div>
  );
};