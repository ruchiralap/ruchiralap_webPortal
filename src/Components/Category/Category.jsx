/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";

const Category = () => {
  const [allCategory] = useCategory();
  console.log(allCategory);

  return (
    <>
      <div className=" mt-44">
        <div>
          <h2 className=" text-4xl font-semibold text-center text-slate-200 mb-10">Our Top Collection's</h2>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allCategory &&
            allCategory?.map((category) => (
              <div
                key={category?._id}
                className=" border rounded-md border-orange-100 hover:shadow-2xl hover:shadow-orange-100"
              >
                <Link to={`/productPage/${category?._id}`}>
                  <div>
                    <div className="avatar p-5">
                      <div className="rounded-full">
                        <img src={category?.category_image} />
                      </div>
                    </div>
                    <div className=" bg-slate-800 rounded-md rounded-t-3xl">
                      <p className=" text-xl font-medium text-slate-300 text-center py-4">
                        {category?.category_name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
