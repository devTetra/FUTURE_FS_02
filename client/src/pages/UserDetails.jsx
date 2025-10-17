import { useEffect } from "react";
import { summaryApi } from "../common/endpoints";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const UserDetails = () => {
  // const [user, setUser] = useState();
  const navigate = useNavigate();
  const { fetchUser, user, logout } = useAuth();
  // const fetchUserDetails = async () => {
  //   const dataResponse = await fetch(summaryApi.details.url, {
  //     method: summaryApi.details.method,
  //     credentials: "include",
  //   });
  //   const data = await dataResponse.json();
  //   setUser({ ...data.message });
  // };
  // console.log(user);

  const handleLogout = async (e) => {
    e.preventDefault();
    // await fetch(summaryApi.logout.url, {
    //   method: summaryApi.logout.method,
    //   credentials: "include",
    // });
    logout();
  };

  useEffect(() => {
    // fetchUserDetails();
    fetchUser();
  }, []);

  return (
    <section className="bg-background text-text font-body flex min-h-screen items-center justify-center px-6 pt-24 md:pt-28">
      <div className="w-full max-w-md rounded-2xl bg-white/5 p-8 shadow-md backdrop-blur-sm">
        <h1 className="font-heading text-primary mb-6 text-center text-2xl">
          User Details
        </h1>

        <div className="space-y-4 text-base">
          <div className="border-border/20 flex justify-between border-b pb-2">
            <span className="text-accent">Name:</span>
            <span className="text-text font-medium">{user?.name}</span>
          </div>
          <div className="border-border/20 flex justify-between border-b pb-2">
            <span className="text-accent">Email:</span>
            <span className="text-text font-medium">{user?.email}</span>
          </div>
        </div>

        <button
          onClick={(e) => handleLogout(e)}
          className="bg-primary hover:bg-primary/90 mt-8 w-full rounded-xl py-3 font-medium text-white transition"
        >
          Log Out
        </button>
      </div>
    </section>
  );
};
