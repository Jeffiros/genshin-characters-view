import { CharacterDataContext } from "../Pages/HomePage";
import { elementsDataContext } from "../Pages/HomePage";
import { useContext } from "react";


function FilterBar() {
  const context = useContext(CharacterDataContext);
  const characters = context.character.character;

  const context2 = useContext(elementsDataContext);
  const elements = context2.elements.elements;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        Elements
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-1"
      >
        {elements.map((element) => {
          return (
            <li>
              <button
                className={`${
                  element == "pyro"
                    ? "text-red-300 bg-red-500 hover:bg-slate-500"
                    : element == "hydro"
                    ? "text-blue-300 bg-blue-500 hover:bg-slate-500"
                    : element == "geo"
                    ? "text-amber-300 bg-amber-500 hover:bg-slate-500"
                    : element == "electro"
                    ? "text-purple-300 bg-purple-500 hover:bg-slate-500"
                    : element == "dendro"
                    ? "text-lime-300 bg-lime-500 hover:bg-slate-500"
                    : element == "cryo"
                    ? "text-cyan-300 bg-cyan-500 hover:bg-slate-500"
                    : element == "anemo"
                    ? "text-emerald-300 bg-emerald-500 hover:bg-slate-500"
                    : null
                }`}
              >
                {element}
              </button>
            </li>
          );
        })}
        <li>
          <button className="bg-white text-black hover:text-white">All</button>
        </li>
      </ul>
    </div>
  );
}
export default FilterBar;
