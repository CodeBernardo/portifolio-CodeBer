import { stagger, useAnimate, useInView } from "framer-motion";
import { experiencesList } from "../../../../../data";
import { MdWork } from "../../../../icons";
import { QualificationCard } from "../qualificationCard";
import s from "./index.module.scss";

export const ExperiencesList = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const staggeredItens = stagger(0.035);

  isInView &&
    animate(
      "li",
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.2, delay: staggeredItens },
    );

  return (
    <div className={s.experiences_container}>
      <h3 className="title3">
        <MdWork size={24} className={s.icon} />
        Experience
      </h3>
      <ul ref={scope}>
        {experiencesList.map((job, i) => (
          <li key={i}>
            <QualificationCard qualification={job} />
          </li>
        ))}
      </ul>
    </div>
  );
};
