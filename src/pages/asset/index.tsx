import AccountCard from "@/components/asset/AccountCard";
import KakaoLogin from "@/assets/kakao-login.png";
import DropDown from "@/components/asset/DropDown";
import { useState } from "react";
// import { Link } from "react-router-dom";

const AssetPage = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  // const KAKAO_LOGIN_URL = process.env.REACT_APP_KAKAO_LOGIN_URL as string;

  return !loggedIn ? (
    <div className=" h-[50vh] w-full flex justify-center items-center">
      {/* <Link to={KAKAO_LOGIN_URL}>
        <img src={KakaoLogin} />
      </Link> */}
      <button onClick={() => setLoggedIn(true)}>
        <img src={KakaoLogin} />
      </button>
    </div>
  ) : (
    <div className="space-y-9">
      <AccountCard username={"서승주"} />
      <div className="space-y-5">
        <DropDown
          title="업비트 보유자산"
          totalAssets={2212930}
          evaluatingIncome={111114.23}
        ></DropDown>
        <DropDown
          title="빗썸 보유자산"
          totalAssets={5200}
          evaluatingIncome={294.33}
        ></DropDown>
        <DropDown
          title="코인원 보유자산"
          totalAssets={39330}
          evaluatingIncome={1249.23}
        ></DropDown>
        {/* <DropDown title="업비트 보유자산" totalAssets={2212930}>ㅁㄴㅇㄹ</DropDown>
        <DropDown title="빗썸 보유자산" totalAssets={5200}>ㅁㄴㅇㄹ</DropDown>
        <DropDown title="코인원 보유자산" totalAssets={39330}>ㅁㄴㅇㄹ</DropDown> */}
      </div>
    </div>
  );
};

export default AssetPage;
