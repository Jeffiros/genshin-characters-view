import FilterBar from "../components/FilterBar";
import CharacterTable from "../components/CharacterTable";
import React from "react";
import { GetDataHooks } from "../components/GetData";

export const CharacterDataContext = React.createContext();
export const elementsDataContext = React.createContext();
export const searchTextDataContext = React.createContext();

function HomePage() {
  const { character, setCharacter, elements, setSearchText, searchText } =
    GetDataHooks();
  const characterData = {
    character,
  };
  const elementData = {
    elements,
  };

  const searchTextData = {
    searchText,
  };

  return (
    <>
      <CharacterDataContext.Provider value={{ character: characterData }}>
        <elementsDataContext.Provider value={{ elements: elementData }}>
          <div className="flex flex-row items-center box-border justify-center gap-5 p-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full sm:max-w-2xl"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <FilterBar />
          </div>
          <searchTextDataContext.Provider value={{searchText: searchTextData}}>
            <div className="flex justify-center w-full">
              <CharacterTable />
            </div>
          </searchTextDataContext.Provider>
        </elementsDataContext.Provider>
      </CharacterDataContext.Provider>
    </>
  );
}
export default HomePage;
