
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div className="">
      <AwesomeSlider  className="h-[80vh]  w-full">
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src="https://i.ibb.co/GkDHn7G/honeyss.png"
            alt="Almond Snack"
          />
        </div>
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src="https://www.malasfruit.com/public/images/homepage/1667306189_banner01_1920x1080_jpg.jpg"
            alt="Apples and Nuts"
          />
        </div>
        <div className="h-full w-full">
          <img
            className="object-fill h-full w-full opacity-80"
            src="https://t4.ftcdn.net/jpg/02/94/31/17/360_F_294311778_E2GAzN0sX0tTBMbny6kf7xULQiipLrgP.jpg"
            alt="Honey Spoon"
          />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Banner