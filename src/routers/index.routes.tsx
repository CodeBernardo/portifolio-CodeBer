import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home";
import { ProjectsPage } from "../pages/projects";
import { ContactPage } from "../pages/contact";

export const MainRouter = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"*"} element={<HomePage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
        <Route path={"/contact"} element={<ContactPage />} />
      </Routes>
    </>
  );
};
