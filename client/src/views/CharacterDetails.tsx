import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { ICharacter } from "../types/character";

const CharacterDetails = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const params = useParams();

  let seconds: number;
  let minutes: number;
  let key: number = 0;

  useEffect(() => {
    const fetchCharacterById = async () => {
      try {
        const response = await fetch(`/api/characters/${params.id}`);
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCharacterById();
  }, [params.id]);

  return (
    <div className="grid grid-cols-6 gap-3 bg-gray-900">
      <div className="col-span-6 grid grid-cols-6 w-full gap-3">
        <div className="col-span-4 justify-start align-start self-start rounded-md border border-emerald-700 grid grid-cols-6 p-2 ">
          <div className="flex">
            <img
              className="shadow-md shadow-emerald-800 mx-2"
              src={character?.assets[0].value}
            />
            <div className="mx-2">
              <h2 className="text-2xl text-gray-900 dark:text-white">
                {character?.name}
              </h2>
              <p className="text-base">
                {character?.name}
                {character?.character_class.name}
                {character?.active_spec.name}
              </p>
            </div>
            <button className="block rounded-md px-5 py-2.5 text-sm font-medium text-emerald-600 transition hover:bg-emerald-700 dark:hover:bg-emerald-500 dark:hover:text-white">
              Update character
            </button>
          </div>
        </div>
        <section className="rounded-md border border-emerald-700 col-span-2">
          <div className="p-2">
            <h2 className="text-white-500">Talent Build</h2>
          </div>
          <div className="grid grid-cols-6 p-2">
            {character?.specializations[0].loadouts[0].selected_class_talents.map(
              (talent) => (
                <div key={key++}>
                  <a
                    href={`https://www.wowhead.com/spell=${talent?.tooltip.spell_tooltip.spell.id}`}
                    data-wh-rename-link="false"
                    data-wh-icon-size="medium"
                  ></a>
                </div>
              ),
            )}
            {character?.specializations[0].loadouts[0].selected_hero_talents.map(
              (talent) => (
                <div key={talent?.tooltip.spell_tooltip.spell.id}>
                  <a
                    href={`https://www.wowhead.com/spell=${talent.tooltip.spell_tooltip.spell.id}`}
                    data-wh-rename-link="false"
                    data-wh-icon-size="medium"
                  ></a>
                </div>
              ),
            )}
            {character?.specializations[0].loadouts[0].selected_spec_talents.map(
              (talent) => (
                <div key={talent?.tooltip.spell_tooltip.spell.id}>
                  <a
                    href={`https://www.wowhead.com/spell=${talent.tooltip.spell_tooltip.spell.id}`}
                    data-wh-rename-link="false"
                    data-wh-icon-size="medium"
                  ></a>
                </div>
              ),
            )}
          </div>
        </section>
      </div>
      <section className="col-span-6 row-span-4 rounded-md border border-emerald-700 p-2">
        <h2 className="text-2xl text-gray-900 dark:text-white">Eqipped Gear</h2>
        <h3 className="text-1xl text-gray-900 dark:text-white">
          {`Equipped item level: ${character?.equipped_item_level}`}
        </h3>
        <div className="divider divider-accent"></div> {/*TODO: fix dividers*/}
        <div>
          <ul className="grid grid-cols-2">
            {character?.character_gear.map((item) => (
              <li key={item.item.id}>
                <a
                  href={`https://www.wowhead.com/item=${item.item.id}`}
                  data-wh-rename-link={false}
                ></a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="col-span-6 rounded-md border border-emerald-700 p-2">
        <h2>Mythic+ Progression</h2>
        <div>
          {character?.keystoneProfileCurrentSeason.mythic_rating ===
          undefined ? (
            <h3 className="text-2xl">You have no rating.</h3>
          ) : (
            <div>
              <span>{`Current rating: ${character?.keystoneProfileCurrentSeason.mythic_rating.rating}`}</span>
            </div>
          )}
        </div>
        <div>
          <h3 className="text-2xl text-gray-900 dark:text-white">
            Best Runs current week
          </h3>
          <hr className="my-12 h-0.5 border-t-0 bg-emerald-700 dark:bg-emerald-700" />
          {character?.keystoneProfileCurrentSeason.best_runs.length ===
          undefined ? (
            <h3 className="text-2xl">
              There are no runs to display. Go run some keys!
            </h3>
          ) : (
            <table className="table-auto w-full ">
              <thead>
                <tr>
                  <th>Dungeon</th>
                  <th>Level</th>
                  <th>Time</th>
                  <th>Score</th>
                  <th>Affixes</th>
                </tr>
              </thead>
              <tbody>
                {character?.keystoneProfileCurrentSeason.best_runs.map(
                  (run) => (
                    <tr key={run.completed_timestamp}>
                      <th>{run.dungeon.name}</th>
                      <th>{run.keystone_level}</th>
                      {run.is_completed_within_time ? (
                        <th>
                          {(minutes = Math.trunc(run.duration / (1000 * 60)))}
                          {":"}
                          {(seconds = Math.trunc((run.duration / 1000) % 60))}
                        </th>
                      ) : (
                        <th className="text-red-500">
                          {(minutes = Math.trunc(run.duration / (1000 * 60)))}
                          {":"}
                          {(seconds = Math.trunc((run.duration / 1000) % 60))}
                        </th>
                      )}
                      <th>{run.mythic_rating.rating}</th>
                      <th>
                        {run.keystone_affixes.map((affix) => (
                          <a
                            href={`https://www.wowhead.com/affix=${affix?.id}`}
                            data-wh-rename-link="false"
                            key={affix?.id}
                          ></a>
                        ))}
                      </th>
                    </tr>
                  ),
                )}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default CharacterDetails;
