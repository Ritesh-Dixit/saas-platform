import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import api from "../../api/axios";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";

import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/auth/login", formData);

      login(response.data.token, response.data.user);

      toast.success(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Login failed"
        );
      } else {
        toast.error("Something went wrong");
      }
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
          Welcome back! Please login to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          disabled={loading}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          disabled={loading}
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          loading={loading}
        >
          Login
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-600">
        Don't have an account?

        <Link
          to="/register"
          className="ml-1 font-semibold text-blue-600 hover:underline"
        >
          Register
        </Link>
      </p>
    </>
  );
}

export default Login;