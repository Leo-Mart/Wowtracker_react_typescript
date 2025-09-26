import { use } from "react";
import { Link } from "react-router";
import CharacterCard from "../components/CharacterCard";
import { CharacterContext } from "../context/CharacterContext";
import type { CharacterContextType } from "../types/character";

const CharactersList = () => {
  const { characters } = use(CharacterContext) as CharacterContextType;
  return (
    <section className="min-h-screen dark:bg-gray-900">
      <ul className="grid grid-cols-6 gap-3 px-8">
        {characters.map((character) => (
          <li key={character._id}>
            <Link to={`/character/${character._id}`}>
              <CharacterCard
                name={character.name}
                level={character.level}
                playerClass={character.character_class.name}
                avatarImg={character.assets[0].value}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharactersList;
