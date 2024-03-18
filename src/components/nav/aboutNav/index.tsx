import s from "./index.module.scss"

export const AboutNav = (): JSX.Element => {
  return (
    <nav>
      <ul className={s.aboutNav_container}>
        <li>
          <button className="title3">Informações</button>
        </li>
        <li>
          <button className="title3">Qualificações</button>
        </li>
        <li>
          <button className="title3">Habilidades</button>
        </li>
      </ul>
    </nav>
  );
};
