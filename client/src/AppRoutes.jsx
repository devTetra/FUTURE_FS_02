import { Navigate, Route, Routes } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import { UserDetails } from "./pages/UserDetails";
import { useAuth } from "./context/AuthContext";

export const AppRoutes = () => {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading..</p>;

  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={user ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="user-details" element={<UserDetails />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
