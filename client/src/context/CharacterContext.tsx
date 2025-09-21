import { createContext, useState, useEffect, type ReactNode } from "react";
import { type CharacterContextType, type ICharacter } from "../types/character";

type Props = { children: ReactNode };

export const CharacterContext = createContext<CharacterContextType | null>(
  null,
);

const CharacterContextProvider = ({ children }: Props) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const fetchAllCharacters = async () => {
    const response = await fetch("/api/characters");
    const data = await response.json();

    setCharacters(data);
  };

  const saveCharacter = (character: ICharacter) => {
    console.log("This will save characters");
  };

  const updateCharacter = (id: string) => {
    console.log("This should update characters");
  };

  const context: CharacterContextType = {
    characters,
    saveCharacter,
    updateCharacter,
  };

  return <CharacterContext value={context}>{children}</CharacterContext>;
};

export default CharacterContextProvider;
