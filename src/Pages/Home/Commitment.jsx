/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import honey from "../../assets/honneyCommitment.png";

const Commitment = () => {
  return (
    <>
      <section className=" font-libre">
        <div className=" flex items-center justify-center">
          <img src={honey} alt="" />
        </div>
        <div className=" text-center md:w-6/12 mx-auto space-y-3">
          <h1 className="text-[#FEEBD6] text-2xl md:text-4xl font-extrabold">
            OUR COMMITMENT TO YOUR 100% SATISFACTION
          </h1>
          <p className="text-[#FEEBD6] text-sm">
            We're confident you'll fall head over honey for our infused nuts,
            but if, against all odds, you don't, just let us know! 100%
            satisfaction guaranteed
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link to="/allProducts">
            <button className=" border-none rounded-full px-12 py-4 text-[#201700] bg-[#F9C302] hover:bg-[#f4d461] font-extrabold">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Commitment;
