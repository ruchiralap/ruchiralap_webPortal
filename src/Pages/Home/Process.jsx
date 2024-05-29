import { CiBeaker1 } from "react-icons/ci";
import { GiProcessor } from "react-icons/gi";
import { PiDropLight } from "react-icons/pi";
import { GiGlassCelebration } from "react-icons/gi";
import beekeeper from "../../assets/beekeeper.png";

const Process = () => {
  return (
    <>
      <section className="bg-[#ECE7D4] md:flex items-center justify-around gap-16 p-5 md:p-10 mb-10 md:mb-20 mt-10 md:mt-20">
        <div className=" flx1">
          <img className=" w-full" src={beekeeper} alt="Beekeeper Image " />
        </div>
        <div className=" flex-1">
          <h1 className=" text-3xl md:text-5xl font-extrabold text-[#332A08] text-center">
            PROCESS WE FOLLOW
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 mt-10">
            <div className=" flex flex-col items-center justify-center">
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <CiBeaker1 className=" text-6xl text-[#201700] " />
                </div>
              </div>
              <p className=" mt-2 text-sm font-medium text-center">
                From Lab to Lab. Not Factory to Fork
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <GiProcessor className=" text-6xl text-[#201700] " />
                </div>
              </div>
              <p className=" mt-2 text-sm font-medium text-center">
                Highly Processed With a Deep Respect
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <GiGlassCelebration className=" text-6xl text-[#201700] " />
                </div>
              </div>
              <p className=" mt-2 text-sm font-medium text-center">
                We Celebrate the Alchemy of Science and Care
              </p>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <PiDropLight className=" text-6xl text-[#201700] " />
                </div>
              </div>
              <p className=" mt-2 text-sm font-medium text-center">
                No shortcuts, no fillers, just 100% pure ingredients
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Process;
