/* eslint-disable react/prop-types */

import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  console.log(products);

  return (
    <>
      <div>
        <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
