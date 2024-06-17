import { HeaderNav } from "../nav";
import s from "./index.module.scss";
import logo from "../../assets/images/bs-logo.png";
import { LanguageSelect } from "../languageSelector";

export const PageHeader = (): JSX.Element => {
  return (
    <div className={s.bg_container}>
      <header className={s.header_container}>
        <div>
          <img src={logo} alt="Imagem of bs logo" />
          <p className="title2 bold">DEV. STEIN </p>
          <LanguageSelect/>
        </div>
        <HeaderNav />
      </header>
    </div>
  );
};
