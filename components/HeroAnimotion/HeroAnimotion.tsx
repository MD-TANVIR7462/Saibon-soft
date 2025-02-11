import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1739025070318.json";

const HeroAnimotion = () => {
  return (
    <div className="">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default HeroAnimotion;
