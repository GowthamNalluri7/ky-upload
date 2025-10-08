// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
//import UploadPage from "./pages/UploadPage";
//
//export default function App() {
//  return <UploadPage />;
//}

import React, { useState } from 'react';
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";

type PageVariant = 'modern' | 'gradient' | 'split' | 'minimal';
type CurrentPage = 'login' | 'signup';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('login');
  const [variant, setVariant] = useState<PageVariant>('gradient');

  return (
    <div className="App">
      {/* Variant Selector - Remove in production */}
      <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg border">
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium mb-1">Page:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage('login')}
                className={`px-3 py-1 text-xs rounded \${
                  currentPage === 'login' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setCurrentPage('signup')}
                className={`px-3 py-1 text-xs rounded \${
                  currentPage === 'signup' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {currentPage === 'login' && (
            <div>
              <label className="block text-sm font-medium mb-1">Style:</label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value as PageVariant)}
                className="text-xs border border-gray-300 rounded px-2 py-1"
              >
                <option value="modern">Modern</option>
                <option value="gradient">Gradient</option>
                <option value="split">Split</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      {currentPage === 'login' ? (
        <LoginPage variant={variant} />
      ) : (
        <SignUpPage />
      )}
    </div>
  );
};

export default App;
