import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  onClick?: () => void;
}

function Button({
  children,
  type = "button",
  loading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;