import { backEndProjects } from "../../../data";
import { ProjectCard } from "./projectCard";
import s from "./index.module.scss";

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className={s.projects_section} id={"projects_section"}>
      <div className="page_center" id="projects_Section"></div>
      <div className={s.projects_content}>
        <div className={s.content_info}>
          <h2 className="title2">PROJECTS</h2>
          <p className="title4 height2">
            Navegue por uma seleção de projetos recentes, abrangendo desde o
            desenvolvimento de back-end até o front-end e o desenvolvimento
            full-stack. Para visualizar mais, deslize ou clique em "Todos os
            projetos" abaixo.
          </p>
          <button className="title4">Todos os projetos</button>
        </div>
        <ul>
          {backEndProjects.map((project, i) => (
            <li key={i}>
              <ProjectCard project={project} type={"BACK END"} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
