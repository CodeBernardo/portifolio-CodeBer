import { PageHeader } from "./components";
import "./styles/main.scss";

function App() {
  return (
    <>
      <div id="background_overlay"></div>
      <div className="default_grid">
        <PageHeader />
      </div>
    </>
  );
}

export default App;
