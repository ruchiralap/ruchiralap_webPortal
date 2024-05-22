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
          <h2 className=" text-3xl font-extrabold text-[#362A0A] mb-10">
            Our Top Collection's
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allCategory &&
            allCategory?.map((category) => (
              <div key={category?._id} className="">
                <Link to={`/productPage/${category?._id}`}>
                  <div>
                    <div className="avatar border rounded-full border-[#201700]">
                      <div className="rounded-full">
                        <img
                          className=" w-full mx-auto"
                          src={category?.category_image}
                          alt="Category Image"
                        />
                      </div>
                    </div>
                    <div className="">
                      <p className=" text-xl font-medium text-[#201700] text-center py-4 hover:underline">
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
