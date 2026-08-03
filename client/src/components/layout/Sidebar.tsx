import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaFolderOpen,
  FaCreditCard,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigation = () => {
    onClose();
  };

  const linkClasses = ({
    isActive,
  }: {
    isActive: boolean;
  }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-700 hover:text-white"
    }`;

  return (
    <>
      {/* Mobile background overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 flex-col bg-slate-900 transition-transform duration-300 md:static md:translate-x-0 ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-700 p-6">
          <h1 className="text-2xl font-bold text-white">
            SaaS Platform
          </h1>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-300 hover:bg-slate-700 hover:text-white md:hidden"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          <NavLink
            to="/dashboard"
            end
            className={linkClasses}
            onClick={handleNavigation}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/projects"
            className={linkClasses}
            onClick={handleNavigation}
          >
            <FaFolderOpen />
            <span>Projects</span>
          </NavLink>

          <NavLink
            to="/dashboard/plans"
            className={linkClasses}
            onClick={handleNavigation}
          >
            <FaCreditCard />
            <span>Plans</span>
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={linkClasses}
            onClick={handleNavigation}
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </nav>

        <div className="border-t border-slate-700 p-4">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition hover:bg-red-600 hover:text-white"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;