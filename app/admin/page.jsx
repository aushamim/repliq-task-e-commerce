import React from "react";
import AllCounts from "../Components/AdminDashboard/AllCounts";
import MonthlyOrderChart from "../Components/AdminDashboard/MonthlyOrderChart";
import MonthlyOrderPrices from "../Components/AdminDashboard/MonthlyOrderPrices";

const AdminDashboard = () => {
  return (
    <div>
      <div className="text-xl font-semibold border-b-2 w-full pb-1">
        Admin Dashboard
      </div>
      <div className="mt-2">
        <AllCounts />
        <MonthlyOrderChart />
        <MonthlyOrderPrices />
      </div>
    </div>
  );
};

export default AdminDashboard;
