import axiosInstance from "@/api/axiosInstance";
import AccountCard from "@/components/asset/AccountCard";
import KakaoLogin from "@/assets/kakao-login.png";
import DropDown from "@/components/asset/DropDown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AssetPage = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const KAKAO_LOGIN_URL = process.env.REACT_APP_KAKAO_LOGIN_URL as string;

  useEffect(() => {
    axiosInstance.get("/auth/check").then((res) => setLoggedIn(res.data));
  }, []);

  console.log(loggedIn);

  return loggedIn ? (
    <div className=" h-[50vh] w-full flex justify-center items-center">
      <Link to={KAKAO_LOGIN_URL}>
        <img src={KakaoLogin} />
      </Link>
    </div>
  ) : (
    <div className="space-y-9">
      <AccountCard username={"서승주"} />
      <div className="space-y-5">
        <DropDown title="업비트 보유자산">
          <div className="h-20" />
        </DropDown>
        <DropDown title="빗썸 보유자산">
          <div className="h-20" />
        </DropDown>
        <DropDown title="코인원 보유자산">
          <div className="h-20" />
        </DropDown>
      </div>
    </div>
  );
};

export default AssetPage;
