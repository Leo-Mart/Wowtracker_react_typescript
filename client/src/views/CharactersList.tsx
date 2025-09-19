import { Link } from "react-router";
import CharacterCard from "../components/CharacterCard";

const CharactersList = () => {
  const characters = [
    {
      name: "Ordos",
      level: 80,
      realm: "Shadowsong",
      playerClass: "Priest",
      avatarImg: "src/assets/images/avatar.jpg",
    },
    {
      name: "Ashir",
      level: 80,
      realm: "Shadowsong",
      playerClass: "Priest",
      avatarImg: "src/assets/images/avatar.jpg",
    },

    {
      name: "Oredos",
      level: 80,
      realm: "Shadowsong",
      playerClass: "Shaman",
      avatarImg: "src/assets/images/avatar.jpg",
    },
  ];
  return (
    <section className="min-h-screen dark:bg-gray-900">
      <ul className="grid grid-cols-6 gap-3 px-8">
        {characters.map((character) => (
          <li key={character.name}>
            <Link to={`/character/${character.name}`}>
              <CharacterCard
                name={character.name}
                level={character.level}
                realm={character.realm}
                playerClass={character.playerClass}
                avatarImg={character.avatarImg}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharactersList;
