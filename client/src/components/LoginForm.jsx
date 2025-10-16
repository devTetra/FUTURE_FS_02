import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { summaryApi } from "../common/endpoints";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
    navigate("/");
  };

  return (
    <div className="font-body flex min-h-screen items-center justify-center bg-inherit">
      <form
        onSubmit={handleSubmit}
        className="bg-background/70 flex w-full max-w-md flex-col gap-6 rounded-2xl p-10 shadow-lg backdrop-blur-md"
      >
        <h2 className="font-heading text-primary text-3xl">Welcome Back</h2>

        <label className="">
          <span className="text-text">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Enter email ..."
            autoComplete="email"
            onChange={(e) => handleOnChange(e)}
            className="focus:ring-primary border-accent/20 bg-background/40 placeholder:text-text/60 mt-1 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:outline-none"
            required
          />
        </label>

        <label className="relative">
          <span className="text-text">Password</span>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password..."
            onChange={handleOnChange}
            autoComplete="current-password"
            required
            className="focus:ring-primary border-accent/20 placeholder:text-text/60 focus:border-primary w-full rounded-lg border bg-white/70 px-4 py-2 pr-10 transition outline-none focus:ring-2"
          />
          <span
            className="text-text/70 hover:text-primary absolute top-9 right-3 cursor-pointer text-lg"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </label>

        <button
          type="submit"
          className="bg-primary hover:bg-accent w-full rounded-xl py-3 font-medium text-white transition"
        >
          Login
        </button>
        <p className="mt-2 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default LoginForm;
