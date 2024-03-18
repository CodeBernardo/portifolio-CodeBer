import { hardSkillsList } from "../../../../data";
import s from "./index.module.scss"

export const SkillsList = (): JSX.Element => {
  return (
    <article className={s.skills_container}>
      <h2 className="title2">Meu conjunto de habilidades</h2>
      <h3 className="title3">Tecnologias</h3>
      <ul className={s.techs_container}>
        {hardSkillsList.map((skill, i) => (
          <li className={skill.name} key={i}>
            {skill.icon}
          </li>
        ))}
      </ul>
      <h3 className="title3">Habilidades comportamentais</h3>
      <ul>
        <li className="text1">Comunicação</li>
        <li className="text1">Criatividade</li>
        <li className="text1">Trabalho em equipe</li>
        <li className="text1">Aprendizado contínuo</li>
        <li className="text1">Organização</li>
        <li className="text1">Metodologias ágeis</li>
      </ul>
      <h3 className="title3">Idiomas</h3>
      <ul>
        <li className="text1">Português nativo</li>
        <li className="text1">Inglês intermediário</li>
      </ul>
    </article>
  );
};
