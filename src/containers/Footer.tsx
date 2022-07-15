import React from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import { demoFooterLinks } from "./demoData";
import emailButton from "assets/emailButton.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Container
      className="p-md-4 p-xs-2 mt-5 pt-md-5"
      style={{ backgroundColor: "#0CA8AC" }}
      fluid
    >
      <Row className="p-md-4">
        {demoFooterLinks.map((_footerData) => {
          return (
            <Col key={_footerData.title} md={3} xs={12} className="text-center my-3">
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "23.44px",
                  color: "white",
                }}
              >
                {_footerData.title}
              </div>
              {_footerData.data.map((_data) => (
                <div key={_data}
                  className="mt-md-4 mt-xs-2"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "18.75px",
                    color: "white",
                  }}
                >
                  {_data}
                </div>
              ))}
            </Col>
          );
        })}

        <Col md={3} className="text-center my-3 ">
          <div
            style={{
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "23.44px",
              color: "white",
            }}
          >
            SUBSCRIBE
          </div>
          <div
            className="mt-md-4 mt-xs-2"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "18.75px",
              color: "white",
            }}
          >
            Stay updated on our latest food release
          </div>
          <div style={{maxWidth: "348px", width: "100%"}} className="position-relative mt-4 mx-auto">
            <input
              className={`${styles.email} rounded-pill`}
              style={{
                width: "100%",
                fontSize: "16px",
                lineHeight: "18.75px",
                color: "white",
                background: "transparent",
                border: "solid white 2px",
                padding: "0.75rem 2rem"
              }}
              placeholder="Enter Email Address"
            />
            <Button className="border-0 p-0" style={{
                position: "absolute",
                right: 0,
                height: "100%",
                background: "transparent"
            }}>
                <img src={emailButton}  style={{
                    height: "100%",
                }}/>
            </Button>
          </div>
          <div
            className="mt-md-4 mt-xs-2"
            style={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "18.75px",
              color: "white",
            }}
          >
            Copyright ©2021. All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
