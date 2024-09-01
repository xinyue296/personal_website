"use client";
import React from "react";
import Navbar from "../components/Navbar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex flex-row bg-gray-50 dark:bg-stone-900 min-h-screen`}>
      <main className={`flex flex-col w-full px-12 md:px-16 min-h-screen`}>
        <Navbar />
        {children}
      </main>
      {/* Sidebar */}
    </div>
  );
};

export default LayoutWrapper;
