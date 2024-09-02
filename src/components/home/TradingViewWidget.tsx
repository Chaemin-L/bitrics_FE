// TradingViewWidget.jsx
import { useEffect, useRef } from "react";

function TradingViewWidget() {
  const isCreated = useRef<boolean>(false);
  const container = useRef();

  useEffect(() => {
    if (isCreated.current) return;
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BTCKRW",
          "interval": "D",
          "timezone": "Asia/Seoul",
          "theme": "dark",
          "style": "1",
          "locale": "kr",
          "support_host": "https://www.tradingview.com"
        }`;
    // @ts-ignore
    container.current.appendChild(script);
    isCreated.current = true;
  }, []);

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
