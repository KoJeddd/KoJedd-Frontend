import Tabs from "./Tabs";

function SearchHeader({
  selectedTab,
  onSelectTab,
  searchQuery,
  isResultsFound,
  searchResult = [],
  onClearSearch,
}) {
  let numMatches = searchResult.length;
  return (
    <>
      <div className="mb-24 flex items-center justify-center gap-7">
        <h1 className=" text-center text-4xl font-light text-white">
          {isResultsFound
            ? `Search results for "${searchQuery}"(${numMatches})`
            : `There are no matches for your search "${searchQuery}" in this category`}
        </h1>
        <button
          onClick={onClearSearch}
          title="Clear search"
          className="text-4xl"
        >
          X
        </button>
      </div>
      <Tabs onSelectTab={onSelectTab} selectedTab={selectedTab} />
      <div className="my-16 flex items-center justify-between px-8">
        <span>Icon here!</span>
        <div>
          <label htmlFor="sortBy">Sort by:</label>
          <select
            name=""
            id="sortBy"
            className="ms-3 rounded-md border border-[#dfdfdf] bg-transparent p-2 pe-20 text-[#dfdfdf] placeholder:text-sm autofill:bg-transparent focus:outline-none"
          >
            <option value="1">Name (A-Z)</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
