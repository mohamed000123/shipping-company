import { Routes, Route, useNavigate } from "react-router-dom";
// pages
import Home from "../pages/home";
import PickedParcels from "../pages/pickedParcels";
import AvailableParcels from "../pages/availableParcels";
import DeliveredParcels from "../pages/deliveredParcels";
// components
import NotFound from "./notFound";
import Nav from "./nav";
//react
import { useEffect } from "react";

const Main = () => {
  //  protecting routes
  const navigate = useNavigate();
  useEffect(() => {
    if (!document.cookie) {
      navigate("/login");
    }
  }, []);
  //
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/parcels"
          element={
            <>
              <Nav />
              <PickedParcels />
            </>
          }
        ></Route>
        <Route
          path="/available"
          element={
            <>
              <Nav />
              <AvailableParcels />
            </>
          }
        ></Route>
        <Route
          path="/delivered"
          element={
            <>
              <Nav />
              <DeliveredParcels />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Main;
