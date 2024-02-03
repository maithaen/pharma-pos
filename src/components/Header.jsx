"use client";

import React from "react";
import { CiMenuBurger, CiMenuKebab } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function MainHeader(props) {
  const openSidebar = props.openSidebar
  const handleSidebar = props.handleSidebar

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50">
        <div className="flex-none">
          <button onClick={handleSidebar} className="btn btn-square btn-ghost xl:hidden">
            {openSidebar ? (
                <IoMdClose className="text-2xl" />
            ) : (
                <CiMenuBurger className="text-2xl" />
            )}
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">Pharma POS</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <CiMenuKebab className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}