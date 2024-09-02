import logo from "@/assets/logo-dark.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col px-7 py-10 gap-4 text-contrast-300 font-medium">
      <img src={logo} className="w-[155px] h-[26px]" />
      <p className="text-[10px] pb-2">
        비트릭스(bitrics)에서 제공하는 투자 및 가격 정보는 사용자의 투자 판단을
        위한 단순 참고용입니다. 투자 제안 및 권유・종목 추천을 위한 것이 아니며,
        투자에 대한 모든 책임은 본인에게 있습니다.
      </p>
      <div className="divide-x divide-contrast-300  text-[12px] ">
        <a
          href="https://bitrics.notion.site/e8cb2ba756b44be0946042da7c894f9c"
          className="pl-0 pr-2 hover:underline"
        >
          제안・문의
        </a>
        <a
          href="https://bitrics.notion.site/bf0945ab6d524a3f91d113740d1ba6e2"
          className="pl-2 pr-2 hover:underline"
        >
          이용약관
        </a>
        <a
          href="https://bitrics.notion.site/c334007f85e848908da1b64abf169da7"
          className="pl-2 hover:underline"
        >
          개인정보처리방침
        </a>
      </div>
    </footer>
  );
};

export default Footer;
