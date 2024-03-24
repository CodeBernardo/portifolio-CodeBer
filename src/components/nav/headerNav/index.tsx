import { useEffect, useState } from "react";
import s from "./index.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HeaderNav = (): JSX.Element => {
  const [page, setPage] = useState(
    sessionStorage.getItem("@currPage:") || "home",
  );

  useEffect(() => {
    sessionStorage.setItem("@currPage:", page);
  }, [page]);

  const handlePageNavigation = (page: string): void => {
    setPage(page);
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return (
    <nav className={s.nav_container}>
      <ul>
        <li className="text2 regular">
          <Link to={"/"}>
            <button onClick={() => handlePageNavigation("home")}>Home</button>
            {page === "home" && (
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
            <button onClick={() => handlePageNavigation("projects")}>Projetos</button>
            {page === "projects" && (
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
            <button onClick={() => handlePageNavigation("contact")}>Contato</button>
            {page === "contact" && (
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
