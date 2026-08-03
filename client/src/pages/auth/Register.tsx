import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
         name,
         email,
         password,
      });

      toast.success("Account created successfully");

      navigate("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          SaaS Platform
        </h1>

        <p className="mt-2 text-gray-500">
          Create your account to get started.
        </p>
      </div>

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Already have an account?

        <Link
          to="/login"
          className="ml-1 font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
}

export default Register;