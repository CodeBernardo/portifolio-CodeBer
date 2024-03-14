import { EducationList } from "./educationList";
import { ExperiencesList } from "./experiencesList";

export const Qualifications = (): JSX.Element => {
  return (
    <article>
      <h2>Minhas Qualificações</h2>
      <div>
        <ExperiencesList />
        <EducationList />
      </div>
    </article>
  );
};
