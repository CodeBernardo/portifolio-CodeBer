import { backEndProjects } from "../../../data";
import { ProjectCard } from "./projectCard";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";
import s from "./index.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "../../icons";
import { Link } from "react-router-dom";

export const ProjectsSection = (): JSX.Element => {


  const [scope, animate] = useAnimate();
  const [alreadyRender, setAlreadyRender] = useState(false);
  const isInView = useInView(scope);

  if (isInView && !alreadyRender) {
    setAlreadyRender(true);
    animate(
      "#projectsContent_container",
      { opacity: [0, 1], x: [-30, 0] },
      {
        type: "spring",
        bounce: 0.2,
        duration: 1,
        stiffness: 200,
        delay: 0.1,
      },
    );
    animate(
      "#projectsList_container",
      { opacity: [0, 1], x: [30, 0] },
      {
        type: "spring",
        bounce: 0.2,
        duration: 1,
        stiffness: 200,
        delay: 0.1,
      },
    );
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 200 : -200,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const projectIndex = wrap(0, backEndProjects.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.section
        key={"projectspage"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={s.projects_section}
        id={"projects_section"}
        ref={scope}
      >
        <div className={s.projects_content}>
          <div id="projectsContent_container" className={s.content_info}>
            <h2 className="title2">PROJETOS</h2>
            <p className="title4 height2">
              Navegue por uma seleção de projetos recentes, abrangendo desde o
              desenvolvimento de back-end até o front-end e o desenvolvimento
              full-stack. Para visualizar mais, deslize o card ou clique
              em "Todos os projetos" abaixo.
            </p>
            <Link to={"/projects"}>
              <button
                className="title4"
                onClick={() => handlePageNavigation("projects")}
              >
                Todos os projetos
              </button>
            </Link>
          </div>
          <ul id="projectsList_container">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.li
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 120, damping: 12 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <ProjectCard
                  project={backEndProjects[projectIndex]}
                  type={"BACK END"}
                />
              </motion.li>
            </AnimatePresence>
            <div className={`${s.next}`} onClick={() => paginate(1)}>
              <MdKeyboardArrowRight size={22} />
            </div>
            <div className={`${s.prev}`} onClick={() => paginate(-1)}>
              <MdKeyboardArrowLeft size={22} />
            </div>
          </ul>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
