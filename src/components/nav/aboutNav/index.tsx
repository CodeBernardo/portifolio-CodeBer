import React from "react";
import s from "./index.module.scss";
import { Subject } from "../../cards/aboutCard";
import { motion } from "framer-motion";

interface AboutNavProps {
  setSubject: (subject: Subject) => void;
  subject: Subject;
}
export const AboutNav: React.FC<AboutNavProps> = ({
  setSubject,
  subject,
}): JSX.Element => {
  return (
    <nav>
      <ul className={s.aboutNav_container}>
        <li>
          <button
            className={"text1 medium "}
            onClick={() => setSubject("personal")}
          >
            <span>Informações</span>
            {subject === "personal" && (
              <motion.div
                className="selected"
                layoutId="selected"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </button>
        </li>
        <li>
          <button
            className={"text1 medium"}
            onClick={() => setSubject("qualifications")}
          >
            <span>Qualificações</span>
            {subject === "qualifications" && (
              <motion.div
                className="selected"
                layoutId="selected"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </button>
        </li>
        <li>
          <button
            className={"text1 medium"}
            onClick={() => setSubject("skills")}
          >
            <span>Habilidades</span>
            {subject === "skills" && (
              <motion.div
                className="selected"
                layoutId="selected"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};
