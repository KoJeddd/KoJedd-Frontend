import React from "react";
import { UserNavbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./pages/Search/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      <main className="bg-neutral-900 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
