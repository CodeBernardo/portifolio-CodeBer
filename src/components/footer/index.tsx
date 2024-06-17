import { Link } from "react-router-dom";
import { FaLinkedin, SiGithub } from "../icons";
import s from "./index.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../providers";
import { NavContextType } from "../../providers/navContext";
import { useLanguageContext } from "../../providers/langContext";

export const PageFooter = (): JSX.Element => {
  const { handlePageNavigation } = useContext(NavContext) as NavContextType;
  const {t} = useLanguageContext()

  return (
    <footer className={s.footer_container} id={"footer"}>
      <div className={s.ending_message}>
        <h2 className="title2 height1">
          {t("home.footer.question1")} <br />
          {t("home.footer.question2")}
        </h2>
        <Link to={"/contact"}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageNavigation("contact")}
            className="title3"
          >
            {t("buttons.contact")}
          </motion.button>
        </Link>
      </div>
      <div className={s.contact_buttons_container}>
        <Link to={"https://github.com/CodeBernardo"}>
          <button>
            <SiGithub size={26} />
          </button>
        </Link>
        <Link to={"https://www.linkedin.com/in/code-bernardo-stein/"}>
          <button>
            <FaLinkedin size={26} />
          </button>
        </Link>
      </div>
      <p>
        {t("home.footer.copywrite1")} © Bernardo Stein.{" "}
        {t("home.footer.copywrite2")}
      </p>
    </footer>
  );
};
