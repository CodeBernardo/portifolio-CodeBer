import { Link } from "react-router-dom";
import { FaLinkedin, SiGithub } from "../icons";
import s from "./index.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../providers";

export const PageFooter = (): JSX.Element => {
  const { handlePageNavigation } = useContext(NavContext);

  return (
    <footer className={s.footer_container} id={"footer"}>
      <div className={s.ending_message}>
        <h2 className="title2">
          Pronto para trazer suas ideias ao mundo real? <br />
          Estou aqui para ajudar.
        </h2>
        <Link to={"/contact"}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageNavigation("contact")}
            className="title3"
          >
            Contato
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
      <p>Direitos autorais © Bernardo Stein. Todos os direitos reservados</p>
    </footer>
  );
};
