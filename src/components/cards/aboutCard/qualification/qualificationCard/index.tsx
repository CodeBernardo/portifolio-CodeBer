import React from "react";
import { Qualification } from "../../../../../interfaces";
import s from "./index.module.scss"

interface QualificationCardProps {
  qualification: Qualification;
}

export const QualificationCard: React.FC<QualificationCardProps> = ({
  qualification,
}): JSX.Element => {
  return (
    <div className={s.qualification_container}>
      <h3 className="text1">{qualification.location}</h3>
      <p className="text2 medium">{qualification.stack}</p>
      <small className="text2">{qualification.period}</small>
    </div>
  );
};
