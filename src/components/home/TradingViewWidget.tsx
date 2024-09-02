import { useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  symbol: string;
}

function TradingViewWidget({ symbol }: TradingViewWidgetProps) {
  const isCreated = useRef<boolean>(false);
  const container = useRef<HTMLDivElement>();

  useEffect(() => {
    if (isCreated.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: "D",
      timezone: "Asia/Seoul",
      theme: "dark",
      style: "1",
      locale: "kr",
      support_host: "https://www.tradingview.com",
    });
    container.current?.appendChild(script);
    isCreated.current = true;
  }, [symbol]);

  return (
    <div
      className="tradingview-widget-container h-[300px]"
      // @ts-ignore
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default TradingViewWidget;
