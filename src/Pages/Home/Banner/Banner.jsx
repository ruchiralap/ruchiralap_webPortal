import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import useBanners from "../../../Hooks/useBanners";

const Banner = () => {
  const [allBanners] = useBanners();

  console.log("all banner: ", allBanners);
  return (
    <div className="">
      <AwesomeSlider className="h-[80vh]  w-full">
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src={`${allBanners[0]?.banner_3_image}`}
            alt="Almond Snack"
          />
        </div>
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src={`${allBanners[1]?.banner_2_image}`}
          />
        </div>
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src={`${allBanners[2]?.banner_1_image}`}
            alt="Honey Spoon"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
