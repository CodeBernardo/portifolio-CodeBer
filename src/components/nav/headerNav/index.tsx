import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../../../providers";
import { useLanguageContext } from "../../../providers/langContext";
import { NavContextType } from "../../../providers/navContext";
import s from "./index.module.scss";

export const HeaderNav = (): JSX.Element => {
  const { page, handlePageNavigation } = useContext(
    NavContext,
  ) as NavContextType;
  const { t } = useLanguageContext();

  return (
    <nav className={s.nav_container}>
      <ul>
        <li className="text2 regular">
          <Link to={"/home"}>
            <button onClick={() => handlePageNavigation("/home")}>
              {t("buttons.home")}
            </button>
            {page === "/home" && (
              <motion.div
                className={s.selected}
                layoutId="selectedPage"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </Link>
        </li>
        <li className="text2 regular">
          <Link to={"/projects"}>
            <button onClick={() => handlePageNavigation("/projects")}>
              {t("buttons.projects")}
            </button>
            {page === "/projects" && (
              <motion.div
                className={s.selected}
                layoutId="selectedPage"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </Link>
        </li>
        <li className="text2 regular">
          <Link to={"/contact"}>
            <button onClick={() => handlePageNavigation("/contact")}>
              {t("buttons.contact")}
            </button>
            {page === "/contact" && (
              <motion.div
                className={s.selected}
                layoutId="selectedPage"
                transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
              ></motion.div>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
