import useAllProducts from "../../Hooks/useAllProducts";

const BestProducts = () => {
  const [allProducts] = useAllProducts();

  return (
    <>
      <section className=" mt-20">
        <div className="mb-10">
          <h3 className=" text-4xl font-semibold text-slate-300 text-center">
            Best Sell Products
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts &&
            allProducts?.map((product) => (
              <div
                key={product?._id}
                className=" border rounded-md p-5 border-orange-100 shadow-md hover:shadow-2xl hover:shadow-orange-50"
              >
                <div>
                  <img
                    className=" rounded-md"
                    src={product?.product_image}
                    alt="Product Image"
                  />
                </div>
                <div className=" text-slate-200 font-medium text-center space-y-4 py-5">
                  <h4>{product?.product_name}</h4>
                  <p className=" text-slate-400">
                    <span>Tk</span> {product?.price}
                  </p>
                </div>
                <div>
                  <button className=" w-full bg-orange-400 hover:bg-orange-700 text-center py-3 rounded-md text-slate-100">
                    Easy Add
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default BestProducts;
