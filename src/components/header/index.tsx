import { HeaderNav } from "../nav";
import s from "./index.module.scss";
import logo from "../../assets/images/bs-logo.png";

export const PageHeader = (): JSX.Element => {
  return (
    <div className={s.bg_container}>
      <header className={s.header_container}>
        <div>
          <img src={logo} alt="Imagem of bs logo" />
          <p className="title1 bold">BERNARDO STEIN</p>
        </div>
        <HeaderNav />
      </header>
    </div>
  );
};
