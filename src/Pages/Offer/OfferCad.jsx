/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const OfferCad = ({ itm }) => {
  const { title, des, offer_img } = itm || {};

  return (
    <>
      <div className=" border-none shadow-md px-8 pt-8 pb-2 bg-[#FAEFD4] rounded-xl hover:rounded-none">
        <h2 className=" text-2xl font-extrabold">{title}</h2>
        <p className=" mt-1 text-sm font-medium">{des}</p>
        <div className=" flex items-center justify-between mt-8">
          <div>
            <Link to="/allProducts">
              <button className="px-6 py-2 border border-[#EEAB0F] hover:border-none hover:bg-[#EEAB0F] hover:text-white hover:scale-110 rounded-full">
                Shop Now
              </button>
            </Link>
          </div>
          <div>
            <img className=" w-36" src={offer_img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferCad;
