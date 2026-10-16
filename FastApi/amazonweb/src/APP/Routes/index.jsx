import { BrowserRouter, Routes, Route } from "react-router";

import Login from "../Screen/Login";
import SignUp from "../Screen/SignUp";
import Product from "../Screen/Product";
import Order from "../Screen/Order";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;