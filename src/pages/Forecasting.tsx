
import React, { useState } from 'react';
import {
  FiPlus,
  FiMoreHorizontal,
  FiThumbsUp,
  FiThumbsDown,
  FiTrendingUp,
  FiSettings,
  FiGrid,
  FiHelpCircle
} from 'react-icons/fi';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

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
    { id: '1', name: 'If expenses were doubled', active: true }
  ]);

  const [activeScenario, setActiveScenario] = useState('1');

  // Sample data for the chart
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
    { month: 'Mar 2022', value: null, forecast: true }
  ];

  const userDefinedMetrics: MetricData[] = [
    { label: 'Vaccine Count', value: '241,000', type: 'user' }
  ];

  const systemDefinedMetrics: MetricData[] = [
    { label: 'Marketing spend', value: '12,000', type: 'system' },
    { label: 'Tests taken', value: '8,591,251', type: 'system' },
    { label: 'Hospitalisations', value: '21,672', type: 'system' },
    { label: 'RTPCRs booked', value: '6,123,029', type: 'system' }
  ];

  const maxValue = Math.max(...chartData.filter(d => d.value).map(d => d.value!));

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      {/* Main Content */}
      < div className="max-w-7xl mx-auto p-6" >
        {/* Page Title */}
        < div className="flex items-center justify-between mb-6" >
          <h1 className="text-2xl font-bold text-gray-900">Forecast: Total cases</h1>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
              <FiPlus className="text-lg" />
              Add scenario
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <FiMoreHorizontal className="text-gray-600" />
            </button>
          </div>
        </div >

        {/* Main Card */}
        < div className="bg-white rounded-xl shadow-sm border border-gray-200" >
          <div className="p-6">
            <div className="flex gap-6">
              {/* Left Sidebar - Scenarios */}
              <div className="w-48 flex-shrink-0">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">KPI forecast</h3>
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.id}
                      onClick={() => setActiveScenario(scenario.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors $\{
                        activeScenario === scenario.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {scenario.name}
                    </button>
                  ))}
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">
                    + Add scenario
                  </button>
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="flex-1">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                      If expenses were doubled
                    </h2>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <FiMoreHorizontal className="text-gray-400" />
                    </button>
                  </div>

                  {/* Chart */}
                  <div className="relative h-64 mb-6">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-500">
                      <span>4M</span>
                      <span>3M</span>
                      <span>2M</span>
                      <span>1M</span>
                      <span>0</span>
                    </div>

                    {/* Chart area */}
                    <div className="ml-8 h-full relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div key={i} className="border-t border-gray-100"></div>
                        ))}
                      </div>

                      {/* Line chart */}
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        {/* Actual data line (blue) */}
                        <polyline
                          points={chartData
                            .filter((d, i) => !d.forecast && d.value)
                            .map((d, i, arr) => {
                              const x = (i / (chartData.length - 1)) * 100;
                              const y = 100 - (d.value! / maxValue) * 90;
                              return `${x},${y}`;
                            })
                            .join(' ')}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.5"
                          className="drop-shadow-sm"
                        />

                        {/* Forecast line (dotted) */}
                        <polyline
                          points={chartData
                            .filter((d, i) => i >= 9 && d.value)
                            .map((d, i, arr) => {
                              const dataIndex = chartData.findIndex(item => item === d);
                              const x = (dataIndex / (chartData.length - 1)) * 100;
                              const y = 100 - (d.value! / maxValue) * 90;
                              return `${x},${y}`;
                            })
                            .join(' ')}
                          fill="none"
                          stroke="#94a3b8"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />

                        {/* Data points */}
                        {chartData.filter(d => d.value && !d.forecast).map((d, i) => {
                          const dataIndex = chartData.findIndex(item => item === d);
                          const x = (dataIndex / (chartData.length - 1)) * 100;
                          const y = 100 - (d.value! / maxValue) * 90;
                          return (
                            <circle
                              key={i}
                              cx={`${x}%`}
                              cy={`${y}%`}
                              r="4"
                              fill="white"
                              stroke="#3b82f6"
                              strokeWidth="2"
                            />
                          );
                        })}

                        {/* Special markers */}
                        <circle cx="70%" cy="42%" r="5" fill="#f97316" />
                      </svg>

                      {/* Data labels */}
                      <div className="absolute" style={{ left: '70%', top: '38%' }}>
                        <span className="text-xs font-medium text-gray-700 bg-white px-1">3.41</span>
                      </div>
                      <div className="absolute" style={{ left: '78%', top: '48%' }}>
                        <span className="text-xs font-medium text-gray-700 bg-white px-1">3.18</span>
                      </div>
                      <div className="absolute" style={{ left: '85%', top: '42%' }}>
                        <span className="text-xs font-medium text-gray-700 bg-white px-1">3.28</span>
                      </div>
                      <div className="absolute" style={{ left: '91%', top: '36%' }}>
                        <span className="text-xs font-medium text-gray-700 bg-white px-1">3.42</span>
                      </div>
                      <div className="absolute" style={{ left: '91%', top: '52%' }}>
                        <span className="text-xs font-medium text-orange-600 bg-white px-1">2.87</span>
                      </div>
                    </div>

                    {/* X-axis labels */}
                    <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500">
                      {['Mar 2021', 'Jun 2021', 'Sep 2021', 'Dec 2021', 'Mar 2022'].map((label, i) => (
                        <span key={i}>{label}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="flex items-center justify-end gap-2 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-600">Is this insight useful?</span>
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <FiThumbsUp className="text-green-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <FiThumbsDown className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Right Sidebar - Metrics */}
              <div className="w-64 flex-shrink-0">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="mb-4">
                    <h3 className="text-xs font-medium text-gray-500 mb-1">
                      Underlying measures
                    </h3>
                    <p className="text-xs text-gray-400">Jan 2022</p>
                  </div>

                  {/* User Defined Metrics */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-500 mb-2">User defined</h4>
                    {userDefinedMetrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-700">{metric.label}</span>
                        <span className="text-sm font-semibold text-gray-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* System Defined Metrics */}
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-2">System defined</h4>
                    {systemDefinedMetrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center py-2">
                        <span className="text-sm text-gray-700">{metric.label}</span>
                        <span className="text-sm font-medium text-gray-900">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
};

export default ForecastingPage;

