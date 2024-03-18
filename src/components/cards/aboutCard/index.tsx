import { AboutNav } from "../../nav";
import aboutImg from "../../../assets/images/OIG4__1_-removebg-preview.png";
import { PersonalInfo } from "./personal";
import { Qualifications } from "./qualification";
import { SkillsList } from "./skills";
import s from "./index.module.scss";


export const AboutCard = () => {
  return (
    <section className={s.second_section}>
      <h2 className="title2">ABOUT</h2>
      <div className={s.about_container}>
        <img src={aboutImg} alt="About image" />
        <div>
          <AboutNav />
          <div className={s.about_content_container}>
            <PersonalInfo />
            {/* <Qualifications /> */}
            {/* <SkillsList /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
