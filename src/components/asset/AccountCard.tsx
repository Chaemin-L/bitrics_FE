import { ChevronRight } from "./Chevron";

interface Props {
  username: string;
}

const AccountCard = ({ username }: Props) => {
  return (
    <div className="min-h-[60px] bg-purple-600 p-5 rounded-[10px] space-y-5 text-white">
      <h2 className="text-[16px]">{username} 님의 계좌</h2>
      <p>
        <strong>거래소별</strong> 각 자산을 가져와요
      </p>
      <div className="flex justify-between cursor-pointer active:cursor-default text-xs">
        <div className="flex items-center gap-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#701BC5" />
            <path
              d="M13.15 22.32V17.22H8.26V14.4H13.15V9.27H16.18V14.4H21.1V17.22H16.18V22.32H13.15Z"
              fill="white"
            />
          </svg>
          <h2 className="text-[16px]">거래소 계좌 연결하기</h2>
        </div>
        <ChevronRight />
      </div>
    </div>
  );
};

export default AccountCard;
