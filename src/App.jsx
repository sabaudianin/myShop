import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
