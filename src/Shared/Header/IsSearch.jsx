import { Search } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../../Context/FilterProvider";
import { Link } from "react-router-dom";

const IsSearch = () => {
  const { handleInputChange } = useContext(FilterContext);

  return (
    <>
      <div className="relative text-slate-900">
        <input
          onChange={handleInputChange}
          type="search"
          name="search"
          placeholder="Search"
          className=" bg-transparent border h-10 px-5 pr-10 rounded-full text-sm focus:outline-none md:w-72 w-[160px] md:border-[#201700]"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <Link to="/allProducts">
            <Search className="h-4 w-5 text-slate-900" />
          </Link>
        </button>
      </div>
    </>
  );
};

export default IsSearch;
