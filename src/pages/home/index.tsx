import { useContext, useEffect, useState } from "react";
import {
  AboutCard,
  ProjectsSection,
  ServicesCard,
  WelcomeCard,
} from "../../components";
import { MdKeyboardArrowDown } from "../../components/icons";
import { NavContext } from "../../providers";
import { NavContextType } from "../../providers/navContext";

export const HomePage = (): JSX.Element => {
  const {handlePageNavigation } = useContext(NavContext) as NavContextType;

  useEffect(() => {
    handlePageNavigation(window.location.pathname)
  })

  const [nextSection, setNextSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    nextSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [nextSection]);

  const handleContentScroll = async (id: string) => {
    await setNextSection(null);
    const newSection = document.getElementById(id);
    setNextSection(newSection);
  };

  return (
    <div>
      <div className="content_section">
        <WelcomeCard />
        <MdKeyboardArrowDown
          size={50}
          className="arrow_down"
          onClick={() => handleContentScroll("about_section")}
        />
      </div>
      <div className="content_section">
        <AboutCard />
        <MdKeyboardArrowDown
          size={50}
          className="arrow_down"
          onClick={() => handleContentScroll("sevices_section")}
        />
      </div>
      <div className="content_section">
        <ServicesCard />
        <MdKeyboardArrowDown
          size={50}
          className="arrow_down"
          onClick={() => handleContentScroll("projects_section")}
        />
      </div>
      <div className="content_section">
        <ProjectsSection />
        <MdKeyboardArrowDown
          size={50}
          className="arrow_down"
          onClick={() => handleContentScroll("footer")}
        />
      </div>
    </div>
  );
};
