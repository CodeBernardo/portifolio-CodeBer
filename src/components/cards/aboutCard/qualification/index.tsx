import { EducationList } from "./educationList";
import { ExperiencesList } from "./experiencesList";
import s from "./index.module.scss"

export const Qualifications = (): JSX.Element => {
  return (
    <article className={s.qualifications_article}>
      <h2 className="title2">Minhas Qualificações</h2>
      <div className={s.qualifications_container}>
        <EducationList />
        <ExperiencesList />
      </div>
    </article>
  );
};
