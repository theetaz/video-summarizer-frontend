import { Button, Col, Row } from "antd";
import VideoPlayer from "@/components/VideoPlayer";

const VideoCard = () => {
  return (
    <>
      <div className="video-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#e2e3e7",
              fontSize: "25px",
            }}
          >
            1# Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
        </div>
        <Row gutter={20}>
          <Col span={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <VideoPlayer
                url="/sampleVideo/sample.mp4"
                width="303px"
                height="400px"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#0e111e",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: "303px",
                  justifyContent: "space-evenly",
                  marginTop: "10px",
                }}
              >
                <Button className="buttonCommon">Share</Button>
                <Button className="buttonCommon">Download</Button>
                <Button className="buttonCommon">Edit</Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#252B48",
                  padding: "15px",
                  borderRadius: "10px",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    marginRight: "5px",
                  }}
                >
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#e2e3e7",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eveniet impedit vitae ipsam sequi, maiores accusantium
                    repudiandae reiciendis voluptas id atque sunt illum omnis
                    molestiae veritatis libero dolor repellat labore temporibus
                    voluptatem nesciunt perspiciatis! Eveniet esse iusto
                    nesciunt nam omnis obcaecati voluptates quia dolorem facere,
                    debitis officia, enim optio ad voluptatem.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        color: "#5B9A8B",
                        marginBottom: "0px",
                      }}
                    >
                      95
                    </h3>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "#e2e3e7",
                      }}
                    >
                      Score
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#242631",
                  borderRadius: "10px",
                  padding: "15px",
                  color: "#83858a",
                  marginTop: "-15px",
                }}
                className="overlay"
              >
                <p
                  style={{
                    marginBottom: "0px",
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio est pariatur ducimus provident. Commodi esse
                  inventore incidunt, natus vitae ullam ipsum consequuntur unde
                  consequatur recusandae perferendis ab amet reiciendis suscipit
                  velit doloribus quo maiores numquam in laudantium. Cupiditate,
                  fugit sed nemo pariatur dolore nostrum tempora aliquid ut ex
                  quia nisi?
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default VideoCard;
