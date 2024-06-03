/* eslint-disable react/prop-types */
const Products = ({ result }) => {
  return (
    <>
      <div className=" flex items-center justify-end px-5">
        <select className="select w-full max-w-[170px] bg-[#FFFBE8] border border-[#201700] rounded-full focus:outline-none">
          <option disabled selected>
            Best Match
          </option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>
      <div>
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {result}
        </section>
      </div>
    </>
  );
};

export default Products;
