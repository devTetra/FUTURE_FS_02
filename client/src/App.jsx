import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const noLayoutPaths = ["/login", "/signup"];
  const hideLayouts = noLayoutPaths.includes(location.pathname);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      disable: false,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
    });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      disable: false,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: "top-bottom",
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <>
      <ToastContainer />
      {!hideLayouts && <Header />}
      <main className="font-body min-h-[100vh]">
        <Outlet />
      </main>
      {!hideLayouts && <Footer />}
    </>
  );
}

export default App;
