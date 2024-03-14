import { educationList } from "../../../../../data";
import { MdSchool } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";

export const EducationList = (): JSX.Element => {
  return (
    <>
      <h3>
        <MdSchool /> Education
      </h3>
      <ul>
        {educationList.map((course, i) => (
          <li key={i}>
            <QualificationCard qualification={course} />
          </li>
        ))}
      </ul>
    </>
  );
};
