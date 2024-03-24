import { useEffect, useState } from "react";
import { ProjectsNav } from "../../components/nav";
import { backEndProjects, frontEndProjects } from "../../data";
import { ProjectCard } from "../../components/cards/projectsCard/projectCard";
import { stagger, useAnimate } from "framer-motion";
import s from "./index.module.scss";

export const ProjectsPage = (): JSX.Element => {
  const [projectsList, setProjectsList] = useState("all");
  const allProjects = [...backEndProjects, ...frontEndProjects];
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "li",
      { opacity: [0, 1], x: [30, 0] },
      { duration: 0.2, delay: stagger(0.09) },
    );
  }, [projectsList]);

  return (
    <>
      <div className="content_section">
        <div className={s.projectsHeader_container}>
          <h1 className="title2">MEUS PROJETOS</h1>
          <ProjectsNav
            projectList={projectsList}
            setProjectsList={setProjectsList}
          />
        </div>
        <div className={s.cards_container}>
          <ul className={s.projectsList_container} ref={scope}>
            {projectsList === "all" &&
              allProjects.map((project, i) => (
                <li key={i}>
                  <ProjectCard project={project} type={project.type} />
                </li>
              ))}
            {projectsList === "backEnd" &&
              backEndProjects.map((project, i) => (
                <li key={i}>
                  <ProjectCard project={project} type={project.type} />
                </li>
              ))}
            {projectsList === "frontEnd" &&
              frontEndProjects.map((project, i) => (
                <li key={i}>
                  <ProjectCard project={project} type={project.type} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
