import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;