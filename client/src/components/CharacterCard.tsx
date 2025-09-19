interface Character {
  name: string;
  level: number;
  realm: string;
  playerClass: string;
  avatarImg: string;
}

const CharacterCard = ({
  name,
  level,
  realm,
  playerClass,
  avatarImg,
}: Character) => {
  return (
    <>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `${avatarImg}` }}
      >
        <div>
          <img
            className="rounded-t-lg"
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
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {realm}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
