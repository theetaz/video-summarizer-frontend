import React from "react";
import { Button, Card, Space } from "antd";
import { Input } from "antd";
import { YoutubeOutlined } from "@ant-design/icons";

const InputComp = () => {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#2d2f34",
          border: "none",
          borderRadius: "15px",
        }}
        className="inputCompCard"
      >
        <Space.Compact
          style={{
            width: "100%",
          }}
        >
          <Input
            styles={{
              backgroundColor: "#21232c",
              color: "#fff",
            }}
            size="large"
            prefix={
              <YoutubeOutlined
                style={{
                  color: "#5b5e65",
                  fontSize: "20px !important",
                }}
              />
            }
            placeholder="Drop a youtube video link"
          />
          <Button className="buttonCommon" size="large">
            Get Clip
          </Button>
        </Space.Compact>
      </Card>
    </>
  );
};

export default InputComp;
