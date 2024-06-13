import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/FilterProvider";
import useCategory from "../../Hooks/useCategory";

const SearchModal = () => {
  const { handleInputChange } = useContext(FilterContext);
  const [allCategory] = useCategory();

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-top">
        <div className="modal-box rounded-none">
          <div>
            <div>
              <p className="text-[#201700] font-semibold pb-2">Recommended:</p>
            </div>
            <div className=" flex flex-wrap items-center gap-2">
              {allCategory?.map((itm) => (
                <div key={itm?._id}>
                  <div className="text-[#201700] border border-[#EEAB0F] rounded-md px-2 py-1">
                    {itm?.category_name}
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full mt-5">
              <input
                className="px-5 py-3 focus:outline-none text-black bg-transparent border border-[#EEAB0F] w-full"
                type="search"
                onChange={handleInputChange}
                name=""
                id=""
                placeholder="Search product's..."
              />
            </div>
            <div className=" flex flex-col items-center justify-center mt-3">
              <Link to="/allProducts">
                <button className="bg-[#EEAB0F] text-white py-[13px] px-12">
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Outside click for close the modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default SearchModal;
