import { Routes, Route, BrowserRouter } from "react-router";
import Home from "../pages/Home";
import CharactersList from "../pages/CharactersList";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
