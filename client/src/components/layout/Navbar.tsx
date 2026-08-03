import { FaBars } from "react-icons/fa";

import { useAuth } from "../../context/AuthContext";

interface NavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {
  const { user } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <FaBars className="text-xl" />
        </button>

        <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden text-right sm:block">
          <p className="font-semibold text-gray-800">
            {user?.name}
          </p>

          <p className="text-sm text-gray-500">
            {user?.role}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

export default Navbar;