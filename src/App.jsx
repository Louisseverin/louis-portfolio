import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AboutMe from "./page/AboutMe";
import Projects from "./page/Projects";
import Skills from "./page/Skills";
import Contact from "./page/Contact";
import GlobalStyles from "./styles/GlobalSylyes";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
