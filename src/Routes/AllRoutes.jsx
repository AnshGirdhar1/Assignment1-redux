import React from "react";
import { Route, Routes } from "react-router-dom";
import CoffeeData from "../Components/CoffeeData";
import EmployeeData from "../Components/EmployeeData";
import RestaurantData from "../Components/RestaurantData";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>hello</div>} />
      <Route path="/coffee-data" element={<CoffeeData />} />
      <Route path="/restaurant-data" element={<RestaurantData />} />
      <Route path="/employee-data" element={<EmployeeData />} />
    </Routes>
  );
};

export { AllRoutes };
