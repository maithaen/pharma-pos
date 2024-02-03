"use client";
import React, { useState } from "react";
import MainHeader from "./Header";
import MainSideLeft from "./Sidebar";



const MainLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  
  return (
    <div className="w-screen bg-white">
      <MainHeader openSidebar={openSidebar} handleSidebar={handleSidebar} />
      <hr />
      <div className="flex justify-start items-start">
        
        <MainSideLeft openSidebar={openSidebar} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
