import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/CustomButton";
import Card from "components/Card";
import React, { FC, useState } from "react";
import {
  Button as ReactstrapButton,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import { demoCrumbs, demoFlavors, demoImages, demoProduct } from "./demoData";
import styles from "./DemoPage.module.scss";
import iconCart from "assets/icon-cart.svg";
import iconHeart from "assets/icon-heart.svg";
import iconHeartWhite from "assets/icon-heart-white.svg";
import Arrowdown from "assets/Arrow down.png";
import fluent_addcircle20Filled from "assets/fluent_add-circle-20-filled.png";
import mdiHeartPlus from "assets/mdi_heart-plus.png";
import image1 from "assets/image1.png";
import line5 from "assets/line5.png";

interface Proptype {
  setModalHeartData: any;
  setModalCartData: any;
}

const DemoPage: FC<Proptype> = ({ setModalHeartData, setModalCartData }) => {
  const [isFlavorOpen, setIsFlavorOpen] = useState(false);
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [onWshList, setOnWishList] = useState(false);

  return (
    <>
      <Container className="p-md-5">
        <Container fluid className="px-md-5">
          <Row>
            <Breadcrumbs data={demoCrumbs} />
          </Row>
          <Row>
            <Col col={5}>
              <Container className="ps-0" fluid>
                <Row>
                  {demoImages.map((_image, i) => {
                    return (
                      <Col key={_image} className="p-2" md={i === 0 ? 12 : 4}>
                        <img style={{ width: "100%" }} src={_image} />
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Col>
            <Col md={7}>
              <div
                className="pt-2"
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "21.09px",
                  color: "black",
                }}
              >
                FRIES
              </div>
              <div
                className="pt-4"
                style={{
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "35.16px",
                  color: "black",
                }}
              >
                CURLY FRIES
              </div>
              <div
                className="pt-4"
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "18.75px",
                  color: "#C4C4C4",
                }}
              >
                <span
                  style={{
                    textDecoration: "line-through",
                  }}
                >
                  ₱169.99{" "}
                </span>
                <span
                  style={{
                    color: "#FF0000",
                  }}
                >
                  (20% OFF)
                </span>
              </div>
              <div
                className="pt-4"
                style={{
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "35.16px",
                  color: "black",
                }}
              >
                ₱135.99
              </div>
              <div
                className="pt-2"
                style={{
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "18.75px",
                  color: "#C4C4C4",
                }}
              >
                Additional tax may apply on checkout
              </div>
              <div
                className="pt-4"
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "23.44px",
                  color: "black",
                }}
              >
                SELECT SIZE
              </div>
              <div className="pt-2">
                <ReactstrapButton
                  className="rounded-pill px-4 py-3 border-0"
                  style={{
                    background: "transparent",
                    fontSize: "20px",
                    lineHeight: "23.44px",
                    color: "#C4C4C4",
                  }}
                >
                  Regular
                </ReactstrapButton>{" "}
                {/* Normally we create variables but not time :) */}
                <ReactstrapButton
                  className="rounded-pill px-4 py-3 border-0"
                  style={{
                    background: "transparent",
                    fontSize: "20px",
                    lineHeight: "23.44px",
                    color: "#C4C4C4",
                  }}
                >
                  Medium
                </ReactstrapButton>
                <ReactstrapButton
                  className="rounded-pill px-4 py-3"
                  style={{
                    background: "#0CA8AC",
                    borderColor: "#0CA8AC",
                    fontSize: "20px",
                    lineHeight: "23.44px",
                  }}
                >
                  Large
                </ReactstrapButton>
              </div>
              <div
                className="pt-4"
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "23.44px",
                  color: "black",
                }}
              >
                SELECT FLAVOR
              </div>
              <div className="pt-4">
                <Dropdown
                  isOpen={isFlavorOpen}
                  toggle={() => setIsFlavorOpen(!isFlavorOpen)}
                >
                  <DropdownToggle
                    className={`${styles.dropdownToggle} rounded-pill px-4`}
                    style={{ width: "357px", position: "relative" }}
                    outline
                    aria-haspopup
                  >
                    {selectedFlavor ? selectedFlavor : "Select Flavor..."}
                    <div
                      className="d-flex justify-content-end align-items-center pe-3"
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: "100%",
                      }}
                    >
                      <img
                        className="me-3"
                        src={line5}
                        style={{ height: "21px" }}
                      />
                      <img
                        src={Arrowdown}
                        style={{
                          height: "17px",
                          width: "17px",
                          transition: "transform 150ms ease",
                          transform: isFlavorOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu
                    style={{
                      width: "357px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                    className="border-0 p-0"
                  >
                    {demoFlavors.map((_flavor) => {
                      return (
                        <DropdownItem
                          key={_flavor}
                          style={{ fontSize: "20px", lineHeight: "23.44px" }}
                          className={`px-4 py-2 ${styles.dorpdownItem}`}
                          onClick={() => setSelectedFlavor(_flavor)}
                        >
                          {_flavor}
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="pt-5">
                <Button
                  style={{
                    backgroundColor: onWshList ? "#0CA8AC" : "white",
                    color: onWshList ? "white" : "black",
                  }}
                  className="px-4 py-3"
                  image={onWshList ? iconHeartWhite : iconHeart}
                  onClick={() => {
                    setModalHeartData({
                      showModal: true,
                      icon: mdiHeartPlus,
                      title: "Product Added to Wishlist",
                      itemImage: image1,
                      itemName: "CURLY FRIES",
                      price: "₱135.99",
                    });
                    setOnWishList(!onWshList);
                  }}
                >
                  Add to Wishlist
                </Button>
                <Button
                  className="ms-4  px-4 py-3"
                  image={iconCart}
                  onClick={() =>
                    setModalCartData({
                      showModal: true,
                      icon: fluent_addcircle20Filled,
                      title: "Product Added to Wishlist",
                      itemImage: image1,
                      itemName: "CURLY FRIES",
                      price: "₱135.99",
                      size: "Large",
                      flavor: "Barbeque",
                    })
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <hr />
      </Container>
      <Container className="p-md-5">
        <Row className="px-md-5">
          <Col>
            <div
              style={{
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "23.44px",
                color: "black",
              }}
            >
              SIMILAR PRODUCTS
            </div>
          </Col>
        </Row>
        <Row className="px-md-5 mt-5">
          {demoProduct.map((_product) => {
            return (
              <Col
                key={`${_product.image}-${_product.name}`}
                className="pe-4"
                md={3}
              >
                <Card {..._product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default DemoPage;
