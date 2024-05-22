/* eslint-disable react/prop-types */

const DetailsCard = ({ productDetail }) => {
  const {
    product_name,
    category_name,
    price,
    product_image,
    description,
    description_title,
    description_title_1,
    description_point_1_1,
    description_point_1_2,
    description_point_1_3,
    description_title_2,
    description_point_2_1,
    description_point_2_2,
    description_point_2_3,
    description_title_3,
    description_point_3_1,
    description_point_3_2,
    description_point_3_3,
    description_title_4,
    description_point_4_1,
    description_point_4_2,
    description_point_4_3,
    description_title_5,
    description_point_5_1,
    description_point_5_2,
    description_point_5_3,
  } = productDetail || {};

  return (
    <>
      <section className=" grid md:flex gap-5 md:gap-10 mt-10">
        <div className=" flex-1 border-r-2">
          <img className=" w-full" src={product_image} alt="" />
        </div>
        <div className=" flex-1 mt-8">
          <h2 className=" text-4xl font-semibold">{product_name}</h2>
          <p className="text-[#1F2937] font-mono">{category_name}</p>
          <p className=" font-semibold mt-2 text-xl">
            <span>Tk</span> {price}
          </p>
          <p className=" mt-5 text-sm">{description}</p>
          <div className=" grid gap-3 mt-10">
            <button className=" border border-[#2B271B] hover:bg-[#4a4432] hover:text-white font-semibold rounded-full w-full py-2">
              Add to cart
            </button>
            <button className=" border border-[#2B271B] hover:bg-[#47443b] hover:text-white font-semibold rounded-full w-full py-2">
              ক্যাশ অন ডেলিভারিতে অর্ডার করুন
            </button>
          </div>
          <div className=" mt-20">
            <h2 className=" text-4xl font-extrabold text-[#201700]">
              Description:
            </h2>
            <div className=" mt-5">
              <h3 className=" text-2xl font-semibold text-[#201700]">
                {description_title && description_title}
              </h3>
              <h3 className=" text-2xl font-semibold text-[#201700] mt-5">{description_title_1 && description_title_1}</h3>
              <div>
                <p>{description_point_1_1}</p>
                <p>{description_point_1_2 && description_point_1_2}</p>
                <p>{description_point_1_3 && description_point_1_3}</p>
              </div>
              <p className=" text-2xl font-semibold text-[#201700]">
                {description_title_2 && description_title_2}
              </p>
              <div>
                <p>{description_point_2_1 && description_point_2_1}</p>
                <p>{description_point_2_2 && description_point_2_2}</p>
                <p>{description_point_2_3 && description_point_2_3}</p>
              </div>
              <p className=" text-2xl font-semibold text-[#201700]">
                {description_title_3 && description_title_3}
              </p>
              <div>
                <p>{description_point_3_1 && description_point_3_1}</p>
                <p>{description_point_3_2 && description_point_3_2}</p>
                <p>{description_point_3_3 && description_point_3_3}</p>
              </div>
              <p className=" text-2xl font-semibold text-[#201700]">
                {description_title_4 && description_title_4}
              </p>
              <div>
                <p>{description_point_4_1 && description_point_4_1}</p>
                <p>{description_point_4_2 && description_point_4_2}</p>
                <p>{description_point_4_3 && description_point_4_3}</p>
              </div>
              <p className=" text-2xl font-semibold text-[#201700]">
                {description_title_5 && description_title_5}
              </p>
              <div>
                <p>{description_point_5_1 && description_point_5_1}</p>
                <p>{description_point_5_2 && description_point_5_2}</p>
                <p>{description_point_5_3 && description_point_5_3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsCard;
