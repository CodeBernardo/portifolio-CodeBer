import { useEffect, useState } from "react";
import {
  AboutCard,
  ProjectsSection,
  ServicesCard,
  WelcomeCard,
} from "../../components";
import { MdKeyboardArrowDown } from "../../components/icons";

export const HomePage = (): JSX.Element => {
  
  const [nextSection, setNextSection] = useState<HTMLElement | null>(null);

  useEffect(() => {
    nextSection?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [nextSection]);

  const handleContentScroll = (id: string) => {
    const section = document.getElementById(id);
    setNextSection(section);
  };

  return (
    <>
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
    </>
  );
};
