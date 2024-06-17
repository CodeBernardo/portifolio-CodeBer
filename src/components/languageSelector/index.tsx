import { useLanguageContext } from "../../providers/langContext/index";
import s from "./index.module.scss"

export const LanguageSelect = () => {
  const { languages, onClickLanguageChange } = useLanguageContext();

  return (
    <select onChange={onClickLanguageChange} className={s.select}>
      {Object.keys(languages).map((lng, i) => (
        <option key={i} value={lng}>
          {languages[lng].nativeName}
        </option>
      ))}
    </select>
  );
};
