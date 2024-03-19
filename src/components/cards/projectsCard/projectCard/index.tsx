import React from "react";
import { Project } from "../../../../interfaces";
import { SiGithub, TbWorldShare } from "../../../icons";
import s from "./index.module.scss";
interface ProjectCardProps {
  project: Project;
  type: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  type,
}): JSX.Element => {
  return (
    <div className={s.card_container}>
      <p className={`text2 medium ${s.project_type}`}>{type}</p>
      <div className={s.img_bg_overlay}>
        <div className={s.img_bg_container}>
          <img src={project.preview} alt={`image of ${project.name}`} />
        </div>
        <div className={s.buttons_container}>
          <button>
            <SiGithub size={32} />
          </button>
          {project.deploy && (
            <button>
              <TbWorldShare size={32} />
            </button>
          )}
        </div>
      </div>
      <div className={s.projectInfo_container}>
        <h2 className="title3">{project.name}</h2>
        <p className="text1 medium height3">{project.description}</p>
      </div>
    </div>
  );
};
