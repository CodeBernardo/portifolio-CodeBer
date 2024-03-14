import { backEndProjects } from "../../../data";
import { ProjectCard } from "./projectCard";

export const ProjectsCard = (): JSX.Element => {
  return (
    <section>
      <div>
        <h2>Últimos projetos</h2>
        <p>
          Navegue por uma seleção de projetos recentes, abrangendo desde o
          desenvolvimento de back-end até o front-end e o desenvolvimento
          full-stack. Para visualizar mais, deslize ou clique em "Todos os
          projetos" abaixo.
        </p>
        <button>Todos os projetos</button>
      </div>
      <div>
        <ul>
          {backEndProjects.map((project,i) => (
            <li key={i}>
              <ProjectCard project={project} type={"BACK END"}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}