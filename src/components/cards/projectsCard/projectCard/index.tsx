import React, { useState } from "react";
import { Project } from "../../../../interfaces";
import { SiGithub, TbWorldShare } from "../../../icons";
import s from "./index.module.scss";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
interface ProjectCardProps {
  project: Project;
  type: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  type,
}): JSX.Element => {
  const [displayButtons, setDisplayButtons] = useState(false);
  const [displayTechs, setDisplayTechs] = useState(false);

  const handleButtonsDisplayOn = () => setDisplayButtons(true);
  const handleButtonsDisplayOff = () => setDisplayButtons(false);

  const handleTechsDisplayOn = () => setDisplayTechs(true);
  const handleTechsDisplayOff = () => setDisplayTechs(false);
  return (
    <div className={s.card_container}>
      <p className={`text2 medium ${s.project_type}`}>{type}</p>
      <div
        onMouseEnter={handleButtonsDisplayOn}
        onMouseLeave={handleButtonsDisplayOff}
        className={s.img_bg_overlay}
      >
        <div className={s.img_bg_container}>
          <img
            src={project.preview}
            alt={`image of ${project.name}`}
            className={displayButtons ? s.buttonsOn : ""}
          />
        </div>
        {displayButtons && (
          <motion.div
            animate={{ scale: [0, 1] }}
            className={s.buttons_container}
          >
            <button>
              <SiGithub size={32} />
            </button>
            {project.deploy && (
              <button>
                <TbWorldShare size={32} />
              </button>
            )}
          </motion.div>
        )}
      </div>
      <div
        onMouseEnter={handleTechsDisplayOn}
        onMouseLeave={handleTechsDisplayOff}
        className={s.projectInfo_container}
      >
        <h2 className={`title3`}>{project.name}</h2>
        {!displayTechs && (
          <>
            <motion.p
              animate={{ scale: [0.8, 1] }}
              className={`text1 medium height`}
            >
              {project.description}
            </motion.p>
          </>
        )}
        {displayTechs && (
          <div className={s.techs_container}>
            <ul>
              {project.techs.map((tech, i) => (
                <motion.li animate={{ scale: [0.5, 1] }} key={i}>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
