import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordInput({
  label,
  name,
  value,
  placeholder,
  disabled = false,
  onChange,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className="w-full rounded-lg border border-gray-300 p-3 pr-12 outline-none transition focus:border-blue-500"
        />

        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;