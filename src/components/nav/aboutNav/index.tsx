import s from "./index.module.scss"

export const AboutNav = (): JSX.Element => {
  return (
    <nav>
      <ul className={s.aboutNav_container}>
        <li>
          <button className="text1 medium">Informações</button>
        </li>
        <li>
          <button className="text1 medium">Qualificações</button>
        </li>
        <li>
          <button className="text1 medium">Habilidades</button>
        </li>
      </ul>
    </nav>
  );
};
