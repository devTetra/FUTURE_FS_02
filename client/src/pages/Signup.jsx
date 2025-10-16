import SignupForm from "../components/SignupForm";
import { Link } from "react-router";

export const Signup = () => {
  return (
    <div className="signup-bg relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/30"></div>

      <h1 className="font-heading text-secondary/90 absolute top-5 left-5 text-2xl drop-shadow-md md:top-8 md:left-8 md:text-4xl">
        AUREO
      </h1>

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <SignupForm />
      </div>
    </div>
  );
};
