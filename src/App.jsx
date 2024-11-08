import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes></Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
