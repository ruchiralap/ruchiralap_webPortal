/* eslint-disable react/prop-types */

const OfferCad = ({ itm }) => {
  const { title, des, offer_img } = itm || {};

  return (
    <>
      <div className=" border-none shadow-md px-8 pt-8 pb-2 bg-white rounded-md">
        <h2 className=" text-2xl font-extrabold">{title}</h2>
        <p className=" mt-1 text-sm font-medium">{des}</p>
        <div className=" flex items-center justify-between mt-8">
          <div>
            <button className="px-6 py-2 border border-[#EEAB0F] rounded-full">
              Shop Now
            </button>
          </div>
          <div>
            <img className=" w-36 h-[130px]" src={offer_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCad;
