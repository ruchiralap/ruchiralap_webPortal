import { CiBeaker1 } from "react-icons/ci";
import beekeeper from "../../assets/beekeeper.png";

const Process = () => {
  return (
    <>
      <section className="bg-[#ECE7D4] flex items-center justify-around gap-5 p-10">
        <div className=" flex-1">
          <h1 className=" text-5xl font-extrabold text-[#332A08]">
            PROCESS WE FOLLOW
          </h1>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <CiBeaker1 className=" text-6xl " />
                </div>
              </div>
              <p className=" mt-2">From Lab to Lab. Not Factory to Fork</p>
            </div>
            <div>
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <CiBeaker1 className=" text-6xl " />
                </div>
              </div>
              <p className=" mt-2">Highly Processed With a Deep Respect</p>
            </div>
            <div>
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <CiBeaker1 className=" text-6xl " />
                </div>
              </div>
              <p className=" mt-2">We Celebrate the Alchemy of Science and Care</p>
            </div>
            <div>
              <div className="avatar">
                <div className=" p-3 bg-[#E2DCC6]  rounded-full">
                  <CiBeaker1 className=" text-6xl " />
                </div>
              </div>
              <p className=" mt-2">No shortcuts, no fillers, just 100% pure ingredients</p>
            </div>
          </div>
        </div>
        <div className=" flx1">
          <img className=" w-full" src={beekeeper} alt="Beekeeper Image " />
        </div>
      </section>
    </>
  );
};

export default Process;
