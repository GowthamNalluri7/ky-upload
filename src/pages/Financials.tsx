
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function FinancialsPage() {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Header />
      <Sidebar />
      <div className="max-w-7xl mx-auto py-10 px-6">
        {/* Page Title */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Financial Report Analysis</h1>
          <p className="text-gray-600 max-w-2xl mt-2">
            Explore the powerful features and analytics enabling smarter cash management and liquidity decisions.
          </p>
        </header>

        {/* Working Capital & Cash Flow */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Working Capital Analytics</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>DSO: <span className="font-semibold">32 days</span> | DPO: <span className="font-semibold">24 days</span> | CCC: <span className="font-semibold">54 days</span></li>
              <li>AR/AP aging buckets & heatmap visualization</li>
              <li>Root-cause insights: late payers, vendor term bottlenecks</li>
              <li>Playbook suggestions to reduce DSO & optimize DPO</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Cash Flow Summary</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Current cash position: <span className="font-semibold">$885,000</span></li>
              <li>Operating cash flow (30d): <span className="font-semibold">$120,000</span></li>
              <li>Cash runway: <span className="font-semibold">7.4 months</span></li>
              <li>Trend: <span className="text-green-600 font-semibold">Positive</span></li>
            </ul>
          </div>
        </section>

        {/* Payment Rail & Liquidity Optimizer */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Payment Rail Advisor</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Recommended method: <span className="font-semibold">ACH/EFT (90% of payments)</span></li>
              <li>Average payment fee saved/mo: <span className="text-green-600 font-semibold">$420</span></li>
              <li>Cross-border fee transparency & remittance detail handling</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Liquidity & Yield Optimization</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Laddered GIC/CD suggestion for <span className="font-semibold">$250,000</span> idle cash</li>
              <li>Reserve buffer sized for payroll & supplier risk</li>
              <li>Simulate yield/loss scenarios and break-glass unwind plans</li>
            </ul>
          </div>
        </section>

        {/* Credit Readiness & Security */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Credit Readiness</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>Borrowing headroom: <span className="font-semibold">$400,000 LOC</span></li>
              <li>DSCR: <span className="font-semibold">2.8</span> & covenants passed</li>
              <li>Sensitivity testing: "Safe" on 15% sales drop</li>
              <li>Instant bank package exports (summary, ratios, variances)</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow border p-6">
            <h2 className="font-bold text-lg mb-2">Security & Compliance</h2>
            <ul className="text-gray-700 text-sm space-y-2">
              <li>SOC 2, ISO/IEC 27001 certified</li>
              <li>Encryption: TLS 1.2+ in transit, AES-256 at rest</li>
              <li>Centralized logging & annual pen-testing</li>
            </ul>
          </div>
        </section>

        {/* Outcomes */}
        <div className="bg-white rounded-2xl shadow border p-6">
          <h2 className="font-bold text-lg mb-2">Tracked Outcomes</h2>
          <ul className="text-gray-700 text-sm space-y-1 ml-3 list-disc">
            <li>Reduced DSO by <span className="font-semibold">7 days</span> average</li>
            <li>Cut average payment fees by <span className="font-semibold">18%</span></li>
            <li>Lifted idle-cash yield by <span className="font-semibold">+54bps</span></li>
            <li>Reduced month-end close and audit prep time by <span className="font-semibold">23%</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
