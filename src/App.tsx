import { AboutCard, PageHeader, ServicesCard, WelcomeCard, ProjectsSection, PageFooter} from "./components";
import { MdKeyboardArrowDown } from "./components/icons";
import "./styles/main.scss";


function App() {
  return (
    <>
      <PageHeader />
      <div className="content_section">
        <WelcomeCard />
        <MdKeyboardArrowDown size={50} className="arrow_down" />
      </div>
      <div className="content_section">
        <AboutCard />
        <MdKeyboardArrowDown size={50} className="arrow_down" />
      </div>
      <div className="content_section">
        <ServicesCard />
        <MdKeyboardArrowDown size={50} className="arrow_down" />
      </div>
      <div className="content_section">
        <ProjectsSection />
        <MdKeyboardArrowDown size={50} className="arrow_down" />
      </div>
      <PageFooter />
    </>
  );
}

export default App;
