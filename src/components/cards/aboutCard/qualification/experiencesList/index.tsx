import { experiencesList } from "../../../../../data";
import { MdWork } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";

export const ExperiencesList = (): JSX.Element => {
  return (
    <>
      <h3>
        <MdWork />
        Experience
      </h3>
      <ul>
        {experiencesList.map((job, i) => (
          <li key={i}>
            <QualificationCard qualification={job} />
          </li>
        ))}
      </ul>
    </>
  );
};
