import axiosInstance from "@/api/axiosInstance";
import KakaoLogin from "@/assets/kakao-login.png";

const AssetPage = () => {
  async function handleLogin() {
    await axiosInstance.get("/auth/kakao");
  }

  return (
    <div className=" h-[50vh] w-full flex justify-center items-center">
      <button onClick={() => handleLogin()}>
        <img src={KakaoLogin} />
      </button>
    </div>
  );
};

export default AssetPage;
