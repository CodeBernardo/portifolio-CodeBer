import { FaLinkedin, GrDocumentDownload, SiGithub } from "../../icons";
import welcome_img from "../../../assets/images/welcome-img.png";
import s from "./index.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const WelcomeCard = (): JSX.Element => {
  return (
    <>
      <section className={s.welcome_section} id="welcome_section">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.4,
            stiffness: 200,
            delay: 0.2,
          }}
          className={s.welcome_container}
        >
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
            <button className="title4">Contato</button>
            <button className="title4">
              <GrDocumentDownload /> Download CV
            </button>
          </div>
          <div className={s.socialIcons_container}>
            <Link to={"https://github.com/CodeBernardo"}>
              <button>
                <SiGithub size={22} />
              </button>
            </Link>
            <button>
              <FaLinkedin size={22} />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.4,
            stiffness: 200,
            delay: 0.2,
          }}
        >
          <img src={welcome_img} alt={`welcome image`} />
        </motion.div>
      </section>
    </>
  );
};
