import { useContext } from "react";
import { Link } from "react-router-dom";
import { FilterContext } from "../../Context/FilterProvider";
import useCategory from "../../Hooks/useCategory";
import { motion } from "framer-motion";

const SearchModal = () => {
  const { handleInputChange } = useContext(FilterContext);
  const [allCategory] = useCategory();

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-top">
        <motion.div
          className="modal-box rounded-none"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div>
              <p className="text-[#201700] font-semibold pb-2">Recommended:</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {allCategory?.map((itm) => (
                <div key={itm?._id} className=" hover:cursor-pointer">
                  <motion.div className="text-[#201700] border border-[#EEAB0F] rounded-md px-2 py-1">
                    {itm?.category_name}
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="w-full mt-5">
              <input
                className="px-5 py-3 focus:outline-none text-black bg-transparent border border-[#EEAB0F] w-full"
                type="search"
                onChange={handleInputChange}
                name=""
                id=""
                placeholder="Search product's..."
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-3">
              <Link to="/allProducts">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-[#EEAB0F] text-white py-[13px] px-12"
                >
                  Search
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* Outside click for close the modal */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default SearchModal;
