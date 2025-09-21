interface Character {
  name: string;
  level: number;
  playerClass: string;
  avatarImg: string;
}

const CharacterCard = ({ name, level, playerClass, avatarImg }: Character) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <img
            className="rounded-t-lg w-full"
            src={avatarImg}
            alt="image of the character"
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`${name} | ${level} ${playerClass}`}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
