import { hardSkillsList } from "../../../../data";

export const SkillsList = (): JSX.Element => {
  return (
    <article>
      <h2>Meu conjunto de habilidades</h2>
      <h3>Tecnologias</h3>
      <ul>
        {hardSkillsList.map((skill, i) => (
          <li className={skill.name} key={i}>
            {skill.icon}
          </li>
        ))}
      </ul>
      <h3>Habilidades comportamentais</h3>
      <ul>
        <li>Comunicação</li>
        <li>Criatividade</li>
        <li>Trabalho em equipe</li>
        <li>Aprendizado contínuo</li>
        <li>Organização</li>
        <li>Metodologias ágeis</li>
      </ul>
      <h3>Idiomas</h3>
      <ul>
        <li>Português nativo</li>
        <li>Inglês intermediário</li>
      </ul>
    </article>
  );
};
