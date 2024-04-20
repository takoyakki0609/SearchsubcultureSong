import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Animation from "../pages/animation/Animation";
import Utaite from "../pages/utaite/Utaite";
import Vocaloid from "../pages/vocaloid/Vocaloid";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/utaite" element={<Utaite />} />
          <Route path="/vocaloid" element={<Vocaloid />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
