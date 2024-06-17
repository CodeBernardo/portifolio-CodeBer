import { useAnimate, useInView } from "framer-motion";
import { useState } from "react";
import { useLanguageContext } from "../../../providers/langContext";
import { BackEndServiceCard } from "./backEndDev";
import { FrontEndServiceCard } from "./frontEndDev";
import s from "./index.module.scss";

export const ServicesCard = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const [alreadyRender, setAlreadyRender] = useState(false);
  const isInView = useInView(scope);
  const {t} = useLanguageContext()

  if (isInView && !alreadyRender) {
    setAlreadyRender(true);
    animate(
      "#frontEnd_container",
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
      "#backEnd_container",
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

  return (
    <section className={s.services_section} id="sevices_section" ref={scope}>
      <div className="page_center" id="services_Section"></div>
      <h2 className="title2">{t("home.section3.sectionTitle")}</h2>
      <div className={s.services_container}>
        <div id="frontEnd_container">
          <FrontEndServiceCard />
        </div>
        <div id="backEnd_container">
          <BackEndServiceCard />
        </div>
      </div>
    </section>
  );
};
