import { Search } from "lucide-react";

const IsSearch = () => {
  return (
    <>
      <div className="relative text-slate-900">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className=" bg-transparent border h-10 px-5 pr-10 rounded-full text-sm focus:outline-none md:w-72 w-[160px] md:border-[#201700]"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <Search className="h-4 w-5 text-slate-900" />
        </button>
      </div>
    </>
  );
};

export default IsSearch;
