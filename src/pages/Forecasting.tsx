import React, { useState } from 'react';
import {
  FiPlus,
  FiMoreHorizontal,
  FiThumbsUp,
  FiThumbsDown,
  FiHelpCircle,
} from 'react-icons/fi';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const kyColors = {
  bluePrimary: "#3A81F1",
  blueLight: "#AACBFF",
  greenPrimary: "#2DC44F",
  greenLight: "#A3D9A5",
  grayLight: "#EAF2F5",
  grayDarkText: "#224B21",
  grayMidText: "#475569",
  borderLight: "#B0CAAE"
};

interface Scenario {
  id: string;
  name: string;
  active: boolean;
}

interface MetricData {
  label: string;
  value: string;
  type: 'user' | 'system';
}

const ForecastingPage: React.FC = () => {
  const [scenarios, setScenarios] = useState<Scenario[]>([
    { id: '1', name: 'If expenses were doubled', active: true },
    { id: '2', name: 'Aggressive collections', active: false },
  ]);
  const [activeScenario, setActiveScenario] = useState('1');

  // Chart data (monthly cash balance, in millions)
  const chartData = [
    { month: 'Mar 2021', value: 1.2 },
    { month: 'Apr 2021', value: 2.1 },
    { month: 'May 2021', value: 2.3 },
    { month: 'Jun 2021', value: 2.17 },
    { month: 'Jul 2021', value: 2.85 },
    { month: 'Aug 2021', value: 2.79 },
    { month: 'Sep 2021', value: 3.03 },
    { month: 'Oct 2021', value: 3.41 },
    { month: 'Nov 2021', value: 3.18 },
    { month: 'Dec 2021', value: 3.28 },
    { month: 'Jan 2022', value: 3.42, forecast: true },
    { month: 'Feb 2022', value: 2.87, forecast: true },
    { month: 'Mar 2022', value: 2.63, forecast: true }
  ];

  const userDefinedMetrics: MetricData[] = [
    { label: 'Total Clients', value: '241', type: 'user' },
    { label: 'Invoices Sent', value: '5,100', type: 'user' },
  ];

  const systemDefinedMetrics: MetricData[] = [
    { label: 'Receivables Due', value: '32,400', type: 'system' },
    { label: 'Expenses Processed', value: '12,200', type: 'system' },
    { label: 'Projected Net Flow', value: '$75,000', type: 'system' },
    { label: 'Gross Margin', value: '58%', type: 'system' }
  ];

  const maxValue = Math.max(...chartData.filter(d => d.value).map(d => d.value!));

  return (
    <div className="min-h-screen" style={{ backgroundColor: kyColors.grayLight }}>
      <Header />
      <Sidebar />
      <div className="max-w-7xl mx-auto p-8">
        {/* Title and action buttons */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold" style={{ color: 'black' }}>Forecasting</h1>
            <p className="mt-1" style={{ color: kyColors.grayMidText }}>Visualize monthly cashflow forecasts and test scenarios to optimize decisions.</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 rounded-lg px-4 py-2"
              style={{ backgroundColor: kyColors.bluePrimary, color: "white" }}
              onClick={() => alert("Add scenario clicked")}
            >
              <FiPlus size={18} />
              Add Scenario
            </button>
            <button className="p-2 rounded-lg hover:bg-white transition" style={{ color: kyColors.grayMidText }}>
              <FiMoreHorizontal size={18} />
            </button>
          </div>
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-300 p-8 flex gap-8">
          {/* Scenario selector */}
          <aside className="w-56 flex-shrink-0">
            <h3 className="text-xs font-semibold uppercase mb-4" style={{ color: kyColors.grayMidText }}>KPI Forecasts</h3>
            <div className="space-y-2">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenario(sc.id)}
                  style={{
                    backgroundColor: sc.id === activeScenario ? kyColors.blueLight : "transparent",
                    color: sc.id === activeScenario ? kyColors.bluePrimary : kyColors.grayDarkText,
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                >
                  {sc.name}
                </button>
              ))}
              <button className="w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition">
                + Add scenario
              </button>
            </div>
          </aside>

          {/* Chart area */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold" style={{ color: kyColors.grayDarkText }}>
                {scenarios.find((s) => s.id === activeScenario)?.name}
              </h2>
              <button className="p-1 rounded hover:bg-gray-100" style={{ color: kyColors.grayMidText }}>
                <FiMoreHorizontal size={18} />
              </button>
            </div>

            <div className="relative h-64 bg-white rounded-xl shadow-inner py-2 px-0 mb-6 overflow-hidden">
              {/* Y axis */}
              <div className="absolute left-8 top-5 bottom-6 flex flex-col justify-between text-xs text-gray-400 font-medium py-3">
                <span>{maxValue.toFixed(1)}M</span>
                <span>{(maxValue * 0.75).toFixed(1)}M</span>
                <span>{(maxValue * 0.5).toFixed(1)}M</span>
                <span>{(maxValue * 0.25).toFixed(1)}M</span>
                <span>0</span>
              </div>
              {/* X axis */}
              <div className="absolute bottom-3 left-10 right-4 flex justify-between text-xs text-gray-400 font-medium">
                {chartData.filter((_, i) => i % 3 === 0).map((d) => <span key={d.month}>{d.month}</span>)}
              </div>

              <svg viewBox="0 0 500 200" width="90%" height="90%" className="absolute left-6 top-5">
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={kyColors.bluePrimary} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={kyColors.bluePrimary} stopOpacity="0" />
                  </linearGradient>
                </defs>

                <polyline
                  fill="url(#gradient)"
                  stroke="none"
                  points={chartData
                    .map((d, i, arr) => {
                      const x = (i / (arr.length - 1)) * 480 + 10;
                      const y = 170 - ((d.value! / maxValue) * 110);
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  style={{ filter: "blur(1.5px)" }}
                />

                <polyline
                  fill="none"
                  stroke={kyColors.bluePrimary}
                  strokeWidth="3"
                  points={chartData
                    .map((d, i, arr) => {
                      const x = (i / (arr.length - 1)) * 480 + 10;
                      const y = 170 - ((d.value! / maxValue) * 110);
                      return `${x},${y}`;
                    })
                    .join(" ")}
                />

                {chartData.map((d, i, arr) => {
                  const x = (i / (arr.length - 1)) * 480 + 10;
                  const y = 170 - ((d.value! / maxValue) * 110);
                  return (
                    <circle key={i} cx={x} cy={y} r={6} fill="white" stroke={kyColors.bluePrimary} strokeWidth="2" />
                  );
                })}

                <polyline
                  points={chartData
                    .filter(d => d.forecast)
                    .map((d, i, arr) => {
                      const idx = chartData.indexOf(d);
                      const x = (idx / (chartData.length - 1)) * 480 + 10;
                      const y = 170 - ((d.value! / maxValue) * 110);
                      return `${x},${y}`;
                    })
                    .join(" ")}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
              </svg>
            </div>

            {/* Feedback buttons */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-100">
              <span style={{ color: kyColors.grayMidText }} className="text-sm">
                Is this insight useful?
              </span>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" style={{ color: kyColors.greenPrimary }}>
                <FiThumbsUp />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" style={{ color: kyColors.grayMidText }}>
                <FiThumbsDown />
              </button>
            </div>
          </main>
          {/* Metrics sidebar */}
          <aside className="w-64 flex-shrink-0 bg-gray-50 rounded-xl p-5 shadow-inner">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Underlying Metrics</h3>
              <p className="text-xs text-gray-400">Jan 2022</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xs font-semibold text-green-700 mb-2">User Defined</h4>
              {userDefinedMetrics.map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between py-2 text-sm font-semibold text-gray-700">
                  <span>{label}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-xs font-semibold text-green-700 mb-2">System Defined</h4>
              {systemDefinedMetrics.map(({ label, value }, idx) => (
                <div key={idx} className="flex justify-between py-2 text-sm font-semibold text-gray-700">
                  <span>{label}</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
            <button
              className="w-full mt-6 bg-blue-50 border border-blue-100 text-blue-700 font-semibold py-2 rounded-lg shadow hover:bg-blue-100 transition"
              style={{ color: kyColors.bluePrimary }}
            >
              <FiHelpCircle className="inline mr-2" /> Need help with metrics?
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ForecastingPage;

