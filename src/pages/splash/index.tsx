import SplashImage from "@/assets/splash.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, []);

  return (
    <div className="h-screen absolute -top-[106px] left-0 right-0  bg-purple-600 flex animate-[fadeOut_0.1s_linear_1.9s]  justify-center items-center">
      <img src={SplashImage} className="" />
    </div>
  );
};

export default Splash;
