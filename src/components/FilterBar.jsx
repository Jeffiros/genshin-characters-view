function FilterBar () {
    
   
    return (
        <div className="grid grid-flow-col gap-3">
          <button
            className="border-2 border-black bg-red-500"
            onClick={() => {
              handleFilter(Pyro);
            }}
          >
            Pyro
          </button>
          <button
            className="border-2 border-black bg-blue-500"
            onClick={() => {
              handleFilter(Hydro);
            }}
          >
            Hydro
          </button>
          <button
            className="border-2 border-black bg-cyan-300"
            onClick={() => {
              handleFilter(Cryo);
            }}
          >
            Cryo
          </button>
          <button
            className="border-2 border-black bg-purple-500"
            onClick={() => {
              handleFilter(Electro);
            }}
          >
            Electro
          </button>
          <button
            className="border-2 border-black bg-emerald-400"
            onClick={() => {
              handleFilter(Anemo);
            }}
          >
            Anemo
          </button>
          <button
            className="border-2 border-black bg-amber-400"
            onClick={() => {
              handleFilter(Geo);
            }}
          >
            Geo
          </button>
          <button
            className="border-2 border-black bg-lime-400"
            onClick={() => {
              handleFilter(Dendro);
            }}
          >
            Dendro
          </button>
          <button
            className="border-2 border-black bg-white"
            onClick={() => {
              handleFilter("");
            }}
          >
            All
          </button>
        </div>
    );
};
export default FilterBar;