import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCard";


export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <Sidebar />
      {/* Header */}
      <header className="mx-auto w-full max-w-6xl px-6 pt-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
              Client Analysis Dashboard
            </h1>
            <p className="mt-2 text-slate-500">
              Monitor client financial health and identify opportunities
            </p>
          </div>

          <Link
            to="/upload"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-white shadow hover:bg-indigo-500"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 3v12m0 0l-3-3m3 3l3-3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="4"
                y="15"
                width="16"
                height="6"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            Add Client Data
          </Link>
        </div>
      </header>

      {/* Welcome Card */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-24 pt-10">
        <section className="rounded-2xl bg-white/90 p-10 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05),0_10px_20px_-10px_rgba(16,24,40,0.1)]">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white">
            <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10">
              <path
                d="M4 16l6-6 4 4 6-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900">
            Welcome to CashFlow Pro
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Start by uploading client financial data to generate insights, cash
            flow analysis, and identify business opportunities.
          </p>

          <div className="mt-8">
            <Link
              to="/upload"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-white shadow hover:bg-indigo-500"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M12 3v12m0 0l-3-3m3 3l3-3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="4"
                  y="15"
                  width="16"
                  height="6"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
              Upload Client Documents
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
