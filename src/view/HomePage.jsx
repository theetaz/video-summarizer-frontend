"use client";

import InputComp from "@/components/InputComp";
import React from "react";

const HomePage = () => {
  return (
    <div
      className="container"
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="inputCompContainer">
        <InputComp />
      </div>
    </div>
  );
};

export default HomePage;
