import { createContext, useContext, useEffect, useState } from "react";
import { summaryApi } from "../common/endpoints";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const fetchUser = async () => {
    try {
      const dataResponse = await fetch(summaryApi.details.url, {
        method: summaryApi.details.method,
        credentials: "include",
      });
      const data = await dataResponse.json();

      if (data.success) setUser(data.message);
      else setUser(null);
    } catch (err) {
      console.error("Error fetching user:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const signup = async (formData) => {
    try {
      const dataResponse = await fetch(summaryApi.signup.url, {
        method: summaryApi.signup.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await dataResponse.json();

      if (data.error) toast.error(data.message);
      if (data.success) toast.success(data.message);
      setUser(data.message);
    } catch (err) {
      console.error("Error signing up:", err);
    }
  };
  const login = async (formData) => {
    try {
      const dataResponse = await fetch(summaryApi.login.url, {
        method: summaryApi.login.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await dataResponse.json();
      if (data.error) toast.error(data.message);
      if (data.success) toast.success(data.message);
      setUser(data.message);
    } catch (err) {
      console.error("Error logging in:", err);
    }
  };
  const logout = async () => {
    try {
      await fetch(summaryApi.logout.url, {
        method: summaryApi.logout.method,
        credentials: "include",
      });
      setUser(null);
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  const value = { user, loading, fetchUser, signup, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used in an AuthProvider");
  return context;
};
