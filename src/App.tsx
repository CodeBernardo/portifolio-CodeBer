
import { PageFooter, PageHeader } from "./components";
import { MainRouter } from "./routers/index.routes";
import "./styles/main.scss";

function App() {
  return (
    <>
      <PageHeader />
      <MainRouter />
      <PageFooter />
    </>
  );
}

export default App;
