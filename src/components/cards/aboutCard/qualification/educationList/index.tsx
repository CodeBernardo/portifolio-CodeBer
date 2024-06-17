import { stagger, useAnimate, useInView } from "framer-motion";
import { educationList } from "../../../../../data";
import { MdSchool } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";
import s from "./index.module.scss";
import { useLanguageContext } from "../../../../../providers/langContext";

export const EducationList = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.035);
  const {t} = useLanguageContext()

  isInView &&
    animate(
      "li",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.2, delay: staggeredItens },
    );

  return (
    <div className={s.education_container}>
      <h3 className="title3">
        <MdSchool size={27} className={s.icon} /> {t("home.section2.qualification.education")}
      </h3>
      <ul ref={scope}>
        {educationList.map((course, i) => (
          <li key={i}>
            <QualificationCard qualification={course} />
          </li>
        ))}
      </ul>
    </div>
  );
};
