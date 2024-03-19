import { AboutNav } from "../../nav";
import aboutImg from "../../../assets/images/OIG4__1_-removebg-preview.png";
import { PersonalInfo } from "./personal";
import { Qualifications } from "./qualification";
import { SkillsList } from "./skills";
import s from "./index.module.scss";
import { useState } from "react";

export type Subject = "personal" | "qualifications" | "skills";

export const AboutCard = () => {
  const [subject, setSubject] = useState<Subject>("personal");

  const handleSubjectDisplay = (sub: Subject) => setSubject(sub);

  return (
    <section className={s.second_section}>
      <h2 className="title2">ABOUT</h2>
      <div className={s.about_container}>
        <img src={aboutImg} alt="About image" />
        <div>
          <AboutNav subject={handleSubjectDisplay} />
          <div className={s.about_content_container}>
            {subject === "personal" && <PersonalInfo />}
            {subject === "qualifications" && <Qualifications />}
            {subject === "skills" && <SkillsList />}
          </div>
        </div>
      </div>
    </section>
  );
};
