"use client";

import InputComp from "@/components/InputComp";
import VideoPlayer from "@/components/VideoPlayer";
import { CheckCircleFilled } from "@ant-design/icons";
import { Avatar, Col, List, Row } from "antd";

import React from "react";

const HomePage = () => {
  const listData = [
    {
      title: "Effortless Video Editing",
      description:
        "Our advanced technology ensures seamless and precise clipping, giving you professional-quality results without any hassle.",
    },
    {
      title: "Save Time and Energy",
      description:
        "No need to spend hours trying to figure out complex editing software. We do it all for you, so you can focus on what matters most.",
    },
    {
      title: "Engage Your Audience",
      description:
        "Short clips are the perfect way to captivate your viewers' attention and keep them coming back for more",
    },
    {
      title: "Versatile Output",
      description:
        "Whether you're a content creator, marketer, educator, or simply want to share memories, our clips can be easily shared on various platforms.",
    },
    {
      title: "Tailored to Your Needs",
      description:
        "We understand that every video is unique, which is why we offer customizable editing options to suit your specific requirements.",
    },
  ];

  return (
    <div
      className="container"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="container text-center">
        <h1
          style={{
            color: "rgb(226, 227, 231)",
            fontSize: "48px",
          }}
        >
          Welcome to Clipper!
        </h1>
        <p
          style={{
            color: "rgb(226, 227, 231)",
          }}
        >
          Metamorphosing lengthy videos into captivating{" "}
          <span
            style={{
              color: "#1eefa4",
            }}
          >
            short clips!
          </span>
        </p>
      </div>
      <div className="inputCompContainer">
        <InputComp />
      </div>
      <div
        className="container-sm"
        style={{
          marginTop: "60px",
        }}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24 }} justify="center">
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#1f2a2e",
                display: "flex",
                justifyContent: "center",
                borderRadius: "15px",
              }}
            >
              <VideoPlayer url="/sampleVideo/sample.mp4" width="303px" height="540px" />
            </div>
          </Col>
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                }}
              >
                <List
                  itemLayout="horizontal"
                  dataSource={listData}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={
                              <CheckCircleFilled
                                style={{
                                  color: "#1eefa4",
                                  fontSize: "20px !important",
                                }}
                              />
                            }
                          />
                        }
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
