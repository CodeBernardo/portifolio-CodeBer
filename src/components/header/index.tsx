import { HeaderNav } from "../nav";
import s from "./index.module.scss"

export const PageHeader = (): JSX.Element => {
  return (
    <header className={s.header_container}>
      <p className="title1 bold">{"{ BERNARDO STEIN }"}</p>
      <HeaderNav />
    </header>
  );
};
