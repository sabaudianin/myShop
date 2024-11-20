import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Product } from "./components/Product";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Category } from "./components/Category";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/product/:id"
            element={<Product />}
          />
          <Route
            path="/category/:id"
            element={<Category />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signUp"
            element={<SignUp />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
