"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function TestClient() {
  const searchParams = useSearchParams();
  const [system, setSystem] = useState("");

  const params: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const getSystemName = () => {
      if (userAgent.includes("Windows")) return "Windows";
      if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) return "iOS";
      if (userAgent.includes("Android")) return "Android";
      if (userAgent.includes("Mac")) return "macOS";
      if (userAgent.includes("Linux") && !userAgent.includes("Android")) return "Linux";
      return "Unknown";
    };
    setSystem(getSystemName());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center space-y-20 p-4 flex-col position-relative">
      <div className="flex items-center justify-center p-4 flex-col">
        <img
          src="/chipmind-logo.png"
          alt="芯连心NFC测试工具"
          className="w-48 h-48 mb-4"
        />
        <h1 className="text-white text-2xl font-bold mb-4">
          欢迎使用芯连心NFC测试工具
        </h1>
      </div>
      <div>
        <div className="text-white text-3xl mb-2 flex items-center">
          <span className="text-red-500">电池电压：</span>
          <span className="border-b border-white px-1">
            {params.voltage || "无"}
          </span>
        </div>
        <div className="text-white text-3xl mb-2 flex items-center">
          <span className="text-red-500">负载电流：</span>
          <span className="border-b border-white px-1">
            {params.current || "无"}
          </span>
        </div>
        <div className="text-white text-3xl mb-2 flex items-center">
          <span className="text-red-500">循环次数：</span>
          <span className="border-b border-white px-1">
            {params.loop || "无"}次
          </span>
        </div>
        <div className="text-white text-xl mt-8 p-4 bg-slate-700/50 rounded-lg max-w-md">
          <span className="text-green-400">当前系统：</span>
          <span className="break-all">{system}</span>
        </div>
      </div>
    </div>
  );
}
