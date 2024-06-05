import { Search } from "lucide-react";
import { useContext } from "react";
import { FilterContext } from "../../Context/FilterProvider";
import { Link } from "react-router-dom";

const IsSearch = () => {
  const { handleInputChange } = useContext(FilterContext);

  return (
    <>
      <div className="relative">
        <input
          className=" border border-[#FFF3BC] bg-none bg-transparent w-full focus:outline-none rounded-full px-8 py-2"
          type="search"
          onChange={handleInputChange}
          name=""
          id=""
          placeholder="Search now..."
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-3">
          <Link to="/allProducts">
            <Search className="h-5 w-6" />
          </Link>
        </button>
      </div>
    </>
  );
};

export default IsSearch;
