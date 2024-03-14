import React from "react";
import { Project } from "../../../../interfaces";
import { SiGithub, TbWorldShare } from "../../../icons";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  type: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  type,
}): JSX.Element => {
  return (
    <div>
      <p>{type}</p>
      <div>
        <img src={project.preview} alt={`image of ${project.name}`} />
      </div>
      <div>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
      <div>
        <Link to={project.github}>
          <button>
            <SiGithub />
          </button>
        </Link>
        {project.deploy && (
          <Link to={project.deploy}>
            <button>
              <TbWorldShare />
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
