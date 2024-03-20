import { AboutNav } from "../../nav";
import aboutImg from "../../../assets/images/OIG4__1_-removebg-preview.png";
import { PersonalInfo } from "./personal";
import { Qualifications } from "./qualification";
import { SkillsList } from "./skills";
import s from "./index.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export type Subject = "personal" | "qualifications" | "skills";

export const AboutCard = () => {
  const [subject, setSubject] = useState<Subject>("personal");
  const handleSubjectDisplay = (sub: Subject) => setSubject(sub);

  return (
    <section className={s.second_section} id="about_section">
      <div className="page_center"></div>
      <h2 className="title2">ABOUT</h2>
      <div className={s.about_container}>
        <div id="img_container">
          <img src={aboutImg} alt="About image" />
        </div>
        <div id="about_container">
          <AboutNav setSubject={handleSubjectDisplay} subject={subject} />
          <div className={s.about_content_container}>
            <AnimatePresence>
              {subject === "personal" && <PersonalInfo />}
              {subject === "qualifications" && <Qualifications />}
              {subject === "skills" && <SkillsList />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
