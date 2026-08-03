import React from "react";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  type = "text",
  name,
  value,
  placeholder,
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

export default Input;