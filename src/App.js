import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Auth from "./pages/Auth";

function App() {
  const path = "/https://t-neha.github.io/cafewebsite/";
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={path} element={<Home />} />
          <Route path={path + "/about"} element={<About />} />
          <Route path={path + "/contact"} element={<Contact />} />
          <Route path={path + "/menu"} element={<Menu />} />
          <Route path={path + "/signin"} element={<Auth />} />
          <Route path={path + "*"} element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
