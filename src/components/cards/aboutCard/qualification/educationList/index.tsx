import { educationList } from "../../../../../data";
import { MdSchool } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";
import s from "./index.module.scss"

export const EducationList = (): JSX.Element => {
  return (
    <div className={s.education_container}>
      <h3 className="title3">
        <MdSchool size={27} className={s.icon}/> Education
      </h3>
      <ul>
        {educationList.map((course, i) => (
          <li key={i}>
            <QualificationCard qualification={course} />
          </li>
        ))}
      </ul>
    </div>
  );
};
