import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { PageNotFound } from "./pages/PageNotFound";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
