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
      <section className=" grid md:flex gap-5 md:gap-10 mt-10 border">
        <div className=" flex-1">
          <img className=" w-full" src={product_image} alt="" />
        </div>
        <div className=" flex-1 mt-8">
          <h2 className=" text-4xl font-semibold">{product_name}</h2>
          <p className=" font-medium mt-2 text-xl">
            <span>Tk</span> {price}
          </p>
          <div className=" grid gap-3 mt-10"> 
            <button className=" border rounded-full w-full py-2">Add to cart</button>
            <button className=" border rounded-full w-full py-2">ক্যাশ অন ডেলিভারিতে অর্ডার করুন</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsCard;
