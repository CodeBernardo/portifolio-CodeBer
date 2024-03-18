import { FaLinkedin, GrDocumentDownload, SiGithub } from "../../icons";
import welcome_img from "../../../assets/images/OIG4.nBa.XCU_fE-removebg-preview.png";
// import welcome_img from "../../../assets/images/OIG2-removebg-preview.png";
// import welcome_img from "../../../assets/images/OIG3__1_-removebg-preview.png";
// import welcome_img from "../../../assets/images/OIG4__1_-removebg-preview.png";
// import welcome_img from "../../../assets/images/baixados (1).png";
// import welcome_img from "../../../assets/images/welcome-img.png";
import s from "./index.module.scss";

export const WelcomeCard = (): JSX.Element => {
  return (
    <>
      <section className={s.welcome_section}>
        <div className={s.welcome_container}>
          <div className={s.welcome_text_container}>
            <p className={`title4 medium ${s.stack_text}`}>
              DESENVOLVEDOR FULL STACK
            </p>
            <h1 className={`title1 bold ${s.welcome_text}`}>
              Olá, meu nome é <br /> Bernardo Stein,
            </h1>

            <p className={`title3 ${s.welcome_bio}`}>
              Eu sou um desenvolvedor full stack especializado em construir
              experiências digitais excepcionais.
            </p>
          </div>
          <div className={s.buttons_container}>
            <button className="title3">Contato</button>
            <button className="title3">
              <GrDocumentDownload /> Download CV
            </button>
          </div>
          <div className={s.socialIcons_container}>
            <button>
              <FaLinkedin size={30} />
            </button>
            <button>
              <SiGithub size={30} />
            </button>
          </div>
        </div>
        <img src={welcome_img} alt={`welcome image`} />
      </section>
    </>
  );
};
