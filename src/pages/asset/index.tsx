import KakaoLogin from "@/assets/kakao-login.png";
import { Link } from "react-router-dom";

const AssetPage = () => {
  const KAKAO_LOGIN_URL = process.env.REACT_APP_KAKAO_LOGIN_URL as string;

  return (
    <div className=" h-[50vh] w-full flex justify-center items-center">
      <Link to={KAKAO_LOGIN_URL}>
        <img src={KakaoLogin} />
      </Link>
    </div>
  );
};

export default AssetPage;
