import { FaLinkedin, GrDocumentDownload, SiGithub } from "../../icons";
import welcome_img from "../../../assets/images/OIG4.nBa.XCU_fE-removebg-preview.png";
import s from "./index.module.scss";

export const WelcomeCard = (): JSX.Element => {
  return (
    <>
      <section className={s.welcome_section} id="welcome_Section">
        <div className={s.welcome_container}>
          <div className={s.welcome_text_container}>
            <p className={`title4 medium ${s.stack_text}`}>
              DESENVOLVEDOR FULL STACK
            </p>
            <h1 className={`title1 bold ${s.welcome_text}`}>
              Olá, meu nome é <br /> Bernardo Stein,
            </h1>

            <p className={`title4 ${s.welcome_bio}`}>
              sou um desenvolvedor full stack especializado em construir
              experiências digitais excepcionais.
            </p>
          </div>
          <div className={s.buttons_container}>
            <button className="text1">Contato</button>
            <button className="text1">
              <GrDocumentDownload /> Download CV
            </button>
          </div>
          <div className={s.socialIcons_container}>
            <button>
              <FaLinkedin size={22} />
            </button>
            <button>
              <SiGithub size={22} />
            </button>
          </div>
        </div>
        <img src={welcome_img} alt={`welcome image`} />
      </section>
    </>
  );
};
