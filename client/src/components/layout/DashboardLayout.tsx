import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] =
    useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar
          onMenuClick={() =>
            setIsSidebarOpen(true)
          }
        />

        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;