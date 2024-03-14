import React from "react";
import { Qualification } from "../../../../../interfaces";

interface QualificationCardProps {
  qualification: Qualification;
}

export const QualificationCard: React.FC<QualificationCardProps> = ({
  qualification,
}): JSX.Element => {
  return (
    <div>
      <h3>{qualification.location}</h3>
      <p>{qualification.stack}</p>
      <small>{qualification.period}</small>
    </div>
  );
};
