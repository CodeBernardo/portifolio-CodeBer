import s from "./index.module.scss"

export const HeaderNav = (): JSX.Element => {
  return (
    <nav className={s.nav_container}>
      <ul>
        <li className="text2 regular">Home</li>
        <li className="text2 regular">Projetos</li>
        <li className="text2 regular">Contato</li>
      </ul>
    </nav>
  );
};
