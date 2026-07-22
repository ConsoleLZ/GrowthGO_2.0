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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex flex-col p-4 sm:p-6">
      <div className="flex flex-col items-center mt-8 mb-6">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg shadow-blue-500/20 mb-4">
          <img
            src="/chipmind-logo.png"
            alt="芯连心NFC测试工具"
            className="w-full h-full object-contain bg-slate-900 rounded-xl"
          />
        </div>
        <h1 className="text-white text-xl sm:text-2xl font-bold text-center">
          芯连心NFC测试工具
        </h1>
        <p className="text-slate-400 text-sm mt-2">智能设备检测终端</p>
      </div>

      <div className="flex-1 w-full max-w-md mx-auto space-y-4">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-slate-300 font-medium">电池电压</span>
            </div>
            <div className="text-right">
              <span className="text-white text-2xl font-bold">{params.voltage || "--"}</span>
              <span className="text-slate-400 text-sm ml-1">V</span>
            </div>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 ${params.voltage && parseFloat(params.voltage) > 3 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: params.voltage ? Math.min(100, parseFloat(params.voltage) * 25) + '%' : '0%' }} />
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-slate-300 font-medium">负载电流</span>
            </div>
            <div className="text-right">
              <span className="text-white text-2xl font-bold">{params.current || "--"}</span>
              <span className="text-slate-400 text-sm ml-1">mA</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-slate-300 font-medium">循环次数</span>
            </div>
            <div className="text-right">
              <span className="text-white text-2xl font-bold">{params.loop || "--"}</span>
              <span className="text-slate-400 text-sm ml-1">次</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-5 border border-green-500/30 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-green-300 font-medium">当前系统</span>
            </div>
            <span className="text-white text-lg font-semibold">{system || "检测中..."}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
