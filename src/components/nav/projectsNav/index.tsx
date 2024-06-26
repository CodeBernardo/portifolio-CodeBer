import { motion } from "framer-motion";
import s from "./index.module.scss";
import { useLanguageContext } from "../../../providers/langContext";

interface ProjectsNavProps {
  setProjectsList: (setProjecList: "all" | "backEnd" | "frontEnd") => void;
  projectList: string;
}

export const ProjectsNav: React.FC<ProjectsNavProps> = ({
  projectList,
  setProjectsList,
}): JSX.Element => {
  const { t } = useLanguageContext()
  return (
    <>
      <ul className={s.projectsNav_container}>
        <li>
          <button className="text1" onClick={() => setProjectsList("all")}>
            <span>{t("buttons.allProjects")}</span>
          </button>
          {projectList === "all" && (
            <motion.div
              className={s.selectedTab}
              layoutId={"projectsTab"}
            ></motion.div>
          )}
        </li>
        <li>
          <button className="text1" onClick={() => setProjectsList("backEnd")}>
            <span>Back End</span>
          </button>
          {projectList === "backEnd" && (
            <motion.div
              className={s.selectedTab}
              layoutId={"projectsTab"}
            ></motion.div>
          )}
        </li>
        <li>
          <button className="text1" onClick={() => setProjectsList("frontEnd")}>
            <span>Front End</span>
          </button>
          {projectList === "frontEnd" && (
            <motion.div
              className={s.selectedTab}
              layoutId={"projectsTab"}
            ></motion.div>
          )}
        </li>
      </ul>
    </>
  );
};
