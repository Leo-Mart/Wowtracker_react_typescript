import { Routes, Route, BrowserRouter } from "react-router";
import Home from "../views/Home";
import CharactersList from "../views/CharactersList";
import ImportNewCharacter from "../views/ImportNewCharacter";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/import-character" element={<ImportNewCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
