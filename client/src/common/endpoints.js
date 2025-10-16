const serverDomain = "https://future-fs-02-z9zr.onrender.com";
export const summaryApi = {
  // Auth
  signup: { url: `${serverDomain}/api/auth/signup`, method: "POST" },
  login: { url: `${serverDomain}/api/auth/login`, method: "POST" },
  logout: { url: `${serverDomain}/api/auth/logout`, method: "POST" },

  // User
  details: { url: `${serverDomain}/api/user/details`, method: "GET" },

  // Products
  products: { url: `${serverDomain}/api/product`, method: "GET" },
  product: { url: `${serverDomain}/api/product`, method: "GET" },

  // Cart
  addToCart: { url: `${serverDomain}/api/cart`, method: "POST" },
  getCart: { url: `${serverDomain}/api/cart`, method: "GET" },
  updateCart: { url: `${serverDomain}/api/cart`, method: "PATCH" },
  removeFromCart: { url: `${serverDomain}/api/cart`, method: "DELETE" },
};
