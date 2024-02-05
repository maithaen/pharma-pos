"use client"
import React, { createContext } from "react";

const SidebarContext = createContext({
  title: "Default Title" // provide a default value for the title property
});

export default SidebarContext;