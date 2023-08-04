import React from "react";

const NavBar = () => {
  return (
    <>
      {/* Nav bar */}

      <div
        className="main-navbar container"
        style={{
          color: "rgb(226, 227, 231)",
        }}
      >
        <div>Logo</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>remainer with clock</div>
          <div>button</div>
          <div>profile</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
