import React from "react";
import s from "./index.module.scss";
import { Subject } from "../../cards/aboutCard";

interface AboutNavProps {
  subject: (subject: Subject) => void;
}
export const AboutNav: React.FC<AboutNavProps> = ({ subject }): JSX.Element => {
  return (
    <nav>
      <ul className={s.aboutNav_container}>
        <li>
          <button className="text1 medium" onClick={() => subject("personal")}>
            Informações
          </button>
        </li>
        <li>
          <button
            className="text1 medium"
            onClick={() => subject("qualifications")}
          >
            Qualificações
          </button>
        </li>
        <li>
          <button className="text1 medium" onClick={() => subject("skills")}>
            Habilidades
          </button>
        </li>
      </ul>
    </nav>
  );
};
