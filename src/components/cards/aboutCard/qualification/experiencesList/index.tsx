import { experiencesList } from "../../../../../data";
import { MdWork } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";
import s from "./index.module.scss";

export const ExperiencesList = (): JSX.Element => {
  return (
    <div className={s.experiences_container}>
      <h3  className="title3">
        <MdWork size={24} className={s.icon} />
        Experience
      </h3>
      <ul>
        {experiencesList.map((job, i) => (
          <li key={i}>
            <QualificationCard qualification={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};
