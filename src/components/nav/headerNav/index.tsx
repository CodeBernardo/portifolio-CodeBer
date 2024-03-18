import s from "./index.module.scss"

export const HeaderNav = (): JSX.Element => {
  return (
    <nav className={s.nav_container}>
      <ul>
        <li className="title4 regular">Home</li>
        <li className="title4 regular">Projetos</li>
        <li className="title4 regular">Contato</li>
      </ul>
    </nav>
  );
};
