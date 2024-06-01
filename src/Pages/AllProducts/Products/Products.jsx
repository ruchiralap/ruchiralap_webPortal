/* eslint-disable react/prop-types */

import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  return (
    <>
      <div className=" flex items-center justify-end px-5">
        <select className="select w-full max-w-[170px] bg-[#FFFBE8] border border-[#201700] rounded-full focus:outline-none">
          <option disabled selected>
            Filter With Price
          </option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>
      <div>
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products &&
            products?.map((product) => (
              <ProductsCard key={product?._id} product={product} />
            ))}
        </section>
      </div>
    </>
  );
};

export default Products;
