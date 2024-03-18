import { AboutCard, PageHeader, WelcomeCard } from "./components";
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
    </>
  );
}

export default App;
