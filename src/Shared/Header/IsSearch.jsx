import { Search } from "lucide-react";

const IsSearch = () => {
  return (
    <>
      <div className="relative">
        <input
          className=" border border-[#FFF3BC] bg-none bg-transparent w-full focus:outline-none rounded-full px-8 py-2"
          type="search"
          name=""
          id=""
          placeholder="Search now..."
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
          <Search className="h-5 w-6" />
        </button>
      </div>
    </>
  );
};

export default IsSearch;
