import { ContactForm } from "../../components";
import { MdEmail, MdLocationPin } from "../../components/icons";
import contactImg from "../../assets/images/contact-img-2.png";
import s from "./index.module.scss";
import { AnimatePresence, motion, useAnimate, useInView } from "framer-motion";
import { useEffect, useContext } from "react";
import { NavContext } from "../../providers";
import { NavContextType } from "../../providers/navContext";
import { useLanguageContext } from "../../providers/langContext";

export const ContactPage = (): JSX.Element => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  const { handlePageNavigation } = useContext(NavContext) as NavContextType;
  const {t} = useLanguageContext()

  useEffect(() => {
    handlePageNavigation(window.location.pathname);
  });

  if (isInView) {
    animate(
      "#contact_form",
      { x: [-30, 0], opacity: [0, 1] },
      {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        stiffness: 200,
        delay: 0.3,
      },
    );
    animate(
      "#contact_img",
      { x: [30, 0], opacity: [0, 1] },
      {
        type: "spring",
        bounce: 0.2,
        duration: 0.4,
        stiffness: 200,
        delay: 0.3,
      },
    );
  }

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={"contactpage"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="content_section"
        >
          <div className={s.contact_container} ref={scope}>
            <div className={s.contactForm_container} id="contact_form">
              <h1 className="title1">{t("contact.question")}</h1>
              <p className="title4 height2">
                {t("contact.copy")}
              </p>
              <p className={`text1 ${s.contact_info}`}>
                <span>
                  <MdEmail size={20} />
                </span>{" "}
                dev.bernardo@proton.me
              </p>
              <p className={`text1 ${s.contact_info}`}>
                <span>
                  <MdLocationPin size={22} />
                </span>{" "}
                Montenegro, Rio Grande do Sul, Brasil.
              </p>
              <ContactForm />
            </div>
            <div className={s.contactImg_container} id="contact_img">
              <img src={contactImg} alt="image of contact page" />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
