import React, { FC } from "react";
import fontisto_close from "assets/fontisto_close.png";
import { Button as ReactstrapButton, Col, Container, Row } from "reactstrap";
import Button from "./CustomButton";

export interface ModalProps {
  showModal?: boolean;
  icon?: string;
  title: string;
  itemImage: string;
  itemName: string;
  price?: string;
  size?: string;
  flavor?: string;
}
interface plusClose extends ModalProps {
    closeModal:any
}

const Modal: FC<plusClose> = ({
  icon,
  title,
  itemImage,
  itemName,
  price,
  size,
  flavor,
  closeModal,
}) => {
  return (
    <Container
      style={{
        position: "absolute",
        top: "55px",
        right: "15px",
        width: "316px",
        height: "226px",
        backgroundColor: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "19px 0px 19px 19px",
        overflow: "hidden",
      }}
      className="modal-container p-0"
    >
      <div
        className="d-flex justify-content-between align-items-center p-2 ps-4"
        style={{ backgroundColor: "#0CA8AC" }}
      >
        <div className="d-flex align-items-center">
          <img src={icon} style={{ height: "31px", width: "31px" }} />
          <div
            className="ms-2"
            style={{
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "17.58px",
              color: "white",
            }}
          >
            {title}
          </div>
        </div>
        <ReactstrapButton
          className="border-0 p-0 m-0"
          style={{ background: "transparent" }}
          onClick={()=>closeModal()}
        >
          <img src={fontisto_close} style={{ height: "22px", width: "22px" }} />
        </ReactstrapButton>
      </div>
      <Row className="pt-2">
        <Col xs={5} className="ps-4" >
          <img
            src={itemImage}
            style={{ height: "91.31px", }}
          />
        </Col>
        <Col xs={7} className="d-flex flex-column align-items-start">
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "17.58px",
              color: "black",
            }}
          >
            {itemName}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "17.58px",
              color: "black",
            }}
          >
            {price}
          </div>
          {size && (
            <div
              style={{
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "11.72px",
                color: "black",
              }}
            >
              Size: <span style={{ fontWeight: 700 }}>{size}</span>
            </div>
          )}
          {flavor && (
            <div
              style={{
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "11.72px",
                color: "black",
              }}
            >Flavor: 
              <span style={{ fontWeight: 700 }}>{flavor}</span>
            </div>
          )}
        </Col>
      </Row>
      <Row className="mx-3 mt-3">
        <Button className="px-4 py-2">
          <span
            style={{
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "17.58px",
              color: "black",
            }}
          >
            View your Wishlist
          </span>
        </Button>
      </Row>
    </Container>
  );
};

export default Modal;
