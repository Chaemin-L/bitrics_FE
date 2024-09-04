import { useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  symbol: string | null;
}

function TradingViewWidget({ symbol }: TradingViewWidgetProps) {
  const isCreated = useRef<boolean>(false);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container || !container.current) return;

    // containerElement가 null이 아닐 때만 작업 수행
    if (!isCreated.current) {
      // 기존 차트가 있다면 제거
      container.current.innerHTML = "";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol,
        interval: "D",
        timezone: "Asia/Seoul",
        theme: "dark",
        style: "1",
        locale: "kr",
        support_host: "https://www.tradingview.com",
      });
      container.current?.appendChild(script);
      isCreated.current = true;
    }
  }, []);

  return (
    <div className="tradingview-widget-container h-[300px]" ref={container}>
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}

export default TradingViewWidget;
