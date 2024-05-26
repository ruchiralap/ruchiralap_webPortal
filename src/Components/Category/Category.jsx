/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";

const Category = () => {
  const [allCategory] = useCategory();
  // console.log(allCategory);

  return (
    <>
      <div className=" w-11/12 mx-auto mt-44">
        <div>
          <h2 className=" text-3xl font-extrabold product-or-price-name mb-10">
            Our Top Collection's
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allCategory &&
            allCategory?.map((category) => (
              <div key={category?._id} className="">
                <Link
                  to={`/categoryWiseProducts/${category?._id}/${category?.category_name}`}
                >
                  <div>
                    <div className="avatar border hover:border-none rounded-full border-color">
                      <div className="rounded-full">
                        <img
                          className=" w-full mx-auto"
                          src={category?.category_image}
                          alt="Category Image"
                        />
                      </div>
                    </div>
                    <div>
                      <p className=" text-xl font-medium product-or-price-name text-center py-4 hover:link font-roboto">
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
