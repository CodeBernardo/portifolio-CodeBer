import { PageFooter, PageHeader } from "./components";
import { MainRouter } from "./routers/index.routes";
import "./styles/main.scss";

function App() {
  return (
    <>
      <PageHeader />
      <main>
        <MainRouter />
      </main>
      <PageFooter />
    </>
  );
}

export default App;
