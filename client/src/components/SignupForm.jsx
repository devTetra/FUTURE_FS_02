import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { summaryApi } from "../common/endpoints";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useAuth();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    signup(formData);
    navigate("/login");
  };

  return (
    <div className="font-body flex min-h-screen items-center justify-center bg-inherit">
      <form
        onSubmit={handleSubmit}
        className="bg-background/70 flex w-full max-w-md flex-col gap-4 rounded-2xl p-6 shadow-lg backdrop-blur-md md:max-w-2xl md:gap-6 md:p-10"
      >
        <h2 className="font-heading text-primary text-3xl">Create Account</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <label>
            <span className="text-text">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter full name..."
              onChange={handleOnChange}
              autoComplete="name"
              required
              className="focus:ring-primary border-accent/20 bg-background/40 placeholder:text-text/60 mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </label>

          <label>
            <span className="text-text">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              onChange={handleOnChange}
              autoComplete="email"
              required
              className="focus:ring-primary border-accent/20 bg-background/40 placeholder:text-text/60 mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </label>

          <label className="relative">
            <span className="text-text">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password..."
              onChange={handleOnChange}
              autoComplete="new-password"
              required
              className="focus:ring-primary border-accent/20 bg-background/40 placeholder:text-text/60 mt-1 w-full rounded-lg border px-4 py-2 pr-10 focus:ring-2 focus:outline-none"
            />
            <span
              className="text-text/70 hover:text-primary absolute top-10 right-3 cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>

          <label className="relative">
            <span className="text-text">Confirm Password</span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password..."
              onChange={handleOnChange}
              autoComplete="new-password"
              required
              className="focus:ring-primary border-accent/20 bg-background/40 placeholder:text-text/60 mt-1 w-full rounded-lg border px-4 py-2 pr-10 focus:ring-2 focus:outline-none"
            />
            <span
              className="text-text/70 hover:text-primary absolute top-10 right-3 cursor-pointer text-lg"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-accent w-full rounded-xl py-3 font-medium text-white transition"
        >
          Sign Up
        </button>

        <p className="mt-2 text-center text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
