
import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

export default function AdminApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      {isAuthenticated ? (
        <Dashboard
          onLogout={() => setIsAuthenticated(false)}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      ) : (
        <Login onLogin={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}
