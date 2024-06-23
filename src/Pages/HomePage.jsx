import axios from "axios";
import FilterBar from "../components/FilterBar";
import { useState, useEffect } from "react";

function HomePage() {
  const [character, setCharacter] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const getCharacter = async () => {
    try {
      const result = await axios.get(
        "https://genshin.jmp.blue/characters/all?lang=en"
      );
      setCharacter(result.data);
      console.log(character);
    } catch (error) {
      console.error("Cannot fetch Data...");
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <div className="flex flex-col box-border gap-5 m-5">
      <h1 className="text-white w-full text-center text-2xl">Hello,World!</h1>
      <div className="flex flex-row justify-around gap-5 box-border">
        <input
          type="text"
          placeholder="Search here..."
          className="flex flex-1 border-2 border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <FilterBar />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full h-fit">
        {character.map((charName) => {
          
            return (
              <>
                <div
                  key={charName.id}
                  className="flex flex-col justify-between border-2 border-slate-700 bg-gradient-to-t p-5 gap-5 from-amber-400/60 to-amber-500/60 text-center"
                >
                  {!charName.id.includes("traveler") && (
                    <img
                      src={`https://genshin.jmp.blue/characters/${charName.id.toLowerCase()}/icon-big`}
                      alt=""
                      className="h-2/3 object-cover"
                    />
                  )}
                  {charName.id.includes("traveler") && (
                    <img
                      src="https://genshin.jmp.blue/characters/traveler-anemo/icon-big-aether"
                      alt=""
                      className="h-2/3 object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1 h-1/3">
                      <>
                        <h4
                          className={`
                            ${
                              charName.vision == "Pyro"
                                ? "text-red-500"
                                : charName.vision == "Hydro"
                                ? "text-blue-600"
                                : charName.vision == "Cryo"
                                ? "text-cyan-500"
                                : charName.vision == "Geo"
                                ? "text-amber-700"
                                : charName.vision == "Dendro"
                                ? "text-lime-500"
                                : charName.vision == "Electro"
                                ? "text-purple-500"
                                : charName.vision == "Anemo"
                                ? "text-emerald-400"
                                : null
                            } 
                            font-bold 
                            ${
                              charName.vision == "Pyro"
                                ? "bg-red-200"
                                : charName.vision == "Hydro"
                                ? "bg-blue-300"
                                : charName.vision == "Cryo"
                                ? "bg-cyan-200"
                                : charName.vision == "Geo"
                                ? "bg-amber-400"
                                : charName.vision == "Dendro"
                                ? "bg-lime-200"
                                : charName.vision == "Electro"
                                ? "bg-purple-200"
                                : charName.vision == "Anemo"
                                ? "bg-emerald-200"
                                : null
                            }  
                            rounded-lg`}
                                >
                                  {charName.name}
                        </h4>
                        <h5
                          className={`
                            ${
                              charName.vision == "Pyro"
                                ? "text-red-500"
                                : charName.vision == "Hydro"
                                ? "text-blue-600"
                                : charName.vision == "Cryo"
                                ? "text-cyan-500"
                                : charName.vision == "Geo"
                                ? "text-amber-700"
                                : charName.vision == "Dendro"
                                ? "text-lime-500"
                                : charName.vision == "Electro"
                                ? "text-purple-500"
                                : charName.vision == "Anemo"
                                ? "text-emerald-400"
                                : null
                            } 
                            font-bold 
                            ${
                              charName.vision == "Pyro"
                                ? "bg-red-200"
                                : charName.vision == "Hydro"
                                ? "bg-blue-300"
                                : charName.vision == "Cryo"
                                ? "bg-cyan-200"
                                : charName.vision == "Geo"
                                ? "bg-amber-400"
                                : charName.vision == "Dendro"
                                ? "bg-lime-200"
                                : charName.vision == "Electro"
                                ? "bg-purple-200"
                                : charName.vision == "Anemo"
                                ? "bg-emerald-200"
                                : null
                            }   
                            rounded-lg`}
                        >
                          {charName.vision}
                        </h5>
                      </>
                  </div>
                </div>
              </>
            );
          
        })}
      </div>
    </div>
  );
}
export default HomePage;
