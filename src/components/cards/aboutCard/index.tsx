import { AboutNav } from "../../nav";
import aboutImg from "../../../assets/images/about-img.png";
import { PersonalInfo } from "./personal";
import { Qualifications } from "./qualification";
import { SkillsList } from "./skills";
import { useState } from "react";
import { AnimatePresence, useAnimate, useInView } from "framer-motion";
import s from "./index.module.scss";

export type Subject = "personal" | "qualifications" | "skills";

export const AboutCard = () => {
  const [subject, setSubject] = useState<Subject>("personal");
  const [alreadyRender, setAlreadyRender] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const handleSubjectDisplay = (sub: Subject) => setSubject(sub);

  if (isInView && !alreadyRender) {
    setAlreadyRender(true);
    animate(
      "#img_container",
      { opacity: [0, 1], x: [-30, 0] },
      { type: "spring", bounce: 0.2, duration: 1, stiffness: 200, delay: 0.1 },
    );
    animate(
      "#aboutContents_container",
      { opacity: [0, 1], x: [30, 0] },
      { type: "spring", bounce: 0.2, duration: 1, stiffness: 200, delay: 0.1 },
    );
  }

  return (
    <section className={s.second_section} id="about_section" ref={scope}>
      <h2 className="title2">SOBRE MIM</h2>
      <div className={s.about_container}>
        <div id="img_container" className={s.img_container}>
          <img src={aboutImg} alt="About image" />
        </div>
        <div id={"aboutContents_container"}>
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
