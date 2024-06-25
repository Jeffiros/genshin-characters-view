import { CharacterDataContext } from "../Pages/HomePage";
import { useContext } from "react";

function CharacterTable() {
  const context = useContext(CharacterDataContext);
  const characters = context.character.character;
  

  return (
    <>
      <div className="grid max-[450px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  grid-flow-row gap-4 pt-10">
        {characters.map((person) => {
          return (
            <div className="flex flex-col justify-start 
             w-[200px] h-[280px] items-center 
            bg-gradient-to-t
            from-amber-400/80 to bg-amber-700/70 rounded-2xl"
            key={person.id}>
              {!person.id.includes("traveler") && (
                <img
                  src={`https://genshin.jmp.blue/characters/${person.id.toLowerCase()}/icon-big`}
                  alt=""
                  className="h-[200px] object-cover"
                />
              )}
              {person.id.includes("traveler") && (
                <img
                  src="https://genshin.jmp.blue/characters/traveler-anemo/icon-big-aether"
                  alt=""
                  className="h-[200px] object-cover"
                />
              )}
              <div className="text-center bg-white w-full h-[80px] 
              flex flex-col justify-center font-bold rounded-b-2xl">
                <p
                  className={`${
                    person.vision == "Pyro"
                      ? "text-red-500"
                      : person.vision == "Hydro"
                      ? "text-blue-600"
                      : person.vision == "Cryo"
                      ? "text-cyan-500"
                      : person.vision == "Geo"
                      ? "text-amber-500"
                      : person.vision == "Dendro"
                      ? "text-lime-500"
                      : person.vision == "Electro"
                      ? "text-purple-500"
                      : person.vision == "Anemo"
                      ? "text-emerald-400"
                      : null
                  } ${person.id.length > 10 ? 'text-lg' : 'text-xl'}`}
                >
                  {person.id.toUpperCase()}
                </p>
                <p
                  className={`font-semibold ${
                    person.vision == "Pyro"
                      ? "text-red-500"
                      : person.vision == "Hydro"
                      ? "text-blue-600"
                      : person.vision == "Cryo"
                      ? "text-cyan-500"
                      : person.vision == "Geo"
                      ? "text-amber-500"
                      : person.vision == "Dendro"
                      ? "text-lime-500"
                      : person.vision == "Electro"
                      ? "text-purple-500"
                      : person.vision == "Anemo"
                      ? "text-emerald-400"
                      : null
                  } `}
                >
                  {person.vision}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CharacterTable;
