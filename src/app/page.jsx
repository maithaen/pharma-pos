"use client"
import React from "react";
import Image from "next/image";
import SidebarContext from "@/context/SidebarContext";
import { useContext } from "react";

export default function Home() {
  const { title } = useContext(SidebarContext);
  
  
  console.log(title);
  return (
    <main>
      <h1 className="text-6xl">my Title: {title}</h1>
      <h1 className="text-6xl">Home page</h1>
    </main>
  );
}