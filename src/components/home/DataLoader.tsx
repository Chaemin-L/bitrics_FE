import React, { useState, useEffect, ReactNode } from "react";
import axiosInstance from "@/api/axiosInstance";
import Loading from "../common/Loading";

interface DataLoaderProps {
  children: (data: {
    exchangeRate: any;
    upbitData: any;
    coinpaprikaData: any;
  }) => ReactNode;
}

const DataLoader: React.FC<DataLoaderProps> = ({ children }) => {
  const [data, setData] = useState<{
    exchangeRate: any;
    upbitData: any;
    coinpaprikaData: any;
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await axiosInstance.get("/markets");
      setData(response.data);
    };
    loadData();
  }, []);

  if (!data) {
    return <Loading />;
  }

  return <>{children(data)}</>;
};

export default DataLoader;
