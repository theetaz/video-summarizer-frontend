import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      {/* Nav bar */}

      <div className="main-navbar container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/clipperLogo.png"
            width={65}
            height={65}
            alt="logo with text"
          />
          <p
            style={{
              margin: "0px",
              fontWeight: "bold",
            }}
          >
            Clipper
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 10px",
            }}
          >
            <ClockCircleOutlined />
            <p
              style={{
                margin: "0 5px",
              }}
            >
              0 mints
            </p>
          </div>
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <Button>Add Creadits</Button>
          </div>
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <div>
              <Image
                src="/images/userImage.png"
                width="30"
                height="30"
                alt="userImage"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div
        className="mobile-navbar container"
        style={{
          color: "rgb(226, 227, 231)",
        }}
      >
        <div>
          <Image
            src="/images/clipperLogo.png"
            width="40"
            height="40"
            alt="userImage"
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "0 10px",
            }}
          >
            <ClockCircleOutlined />
            <p
              style={{
                margin: "0 5px",
              }}
            >
              0 mints
            </p>
          </div>
          <div
            style={{
              margin: "0 10px",
            }}
          >
            <div>
              <Image
                src="/images/userImage.png"
                width={30}
                height={30}
                alt="userImage"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
