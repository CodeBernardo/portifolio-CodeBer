import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import welcome_img from "../../../assets/images/welcome-img.png";
import { NavContext } from "../../../providers";
import { NavContextType } from "../../../providers/navContext";
import { FaLinkedin, GrDocumentDownload, SiGithub } from "../../icons";
import s from "./index.module.scss";

export const WelcomeCard = (): JSX.Element => {
  const navigate = useNavigate();
  const { handlePageNavigation } = useContext(NavContext) as NavContextType;

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.section
          key={"homepage"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={s.welcome_section}
          id="welcome_section"
        >
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

              <p className={`title4 height2 ${s.welcome_bio}`}>
                sou um desenvolvedor full stack especializado em construir
                experiências digitais excepcionais.
              </p>
            </div>
            <div className={s.buttons_container}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="title4"
                onClick={() => {
                  navigate("/contact");
                  handlePageNavigation("contact");
                }}
              >
                Contato
              </motion.button>
              {/* <motion.button whileTap={{ scale: 0.9 }} className="title4">
                <GrDocumentDownload /> Download CV
              </motion.button> */}
            </div>
            <div className={s.socialIcons_container}>
              <Link to={"https://github.com/CodeBernardo"}>
                <button>
                  <SiGithub size={22} />
                </button>
              </Link>
              <Link to={"https://www.linkedin.com/in/code-bernardo-stein/"}>
                <button>
                  <FaLinkedin size={22} />
                </button>
              </Link>
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
        </motion.section>
      </AnimatePresence>
    </>
  );
};
