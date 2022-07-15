import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import iconMenu from "assets/icon-menu.svg";
import SearchInput from "components/SearchInput";
import iconHeart from "assets/icon-heart.svg";
import iconCart from "assets/icon-cart.svg";
import iconProfile from "assets/icon-profile.svg";
import Badge from "components/Badge";
import Modal from "components/Modal";
import { ModalProps } from "components/Modal";

interface Props {
  modalHeartData: ModalProps;
  modalCartData: ModalProps;
  closeHeartModal: any;
  closeCartModal: any;
}

const Header: FC<Props> = ({
  modalHeartData,
  modalCartData,
  closeHeartModal,
  closeCartModal,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Container fluid="xxl" className="border-bottom px-md-5">
      <Row className="p-md-4">
        <Col className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Button
              className="border-0"
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <img
                style={{
                  width: "51px",
                  height: "51px",
                }}
                src={iconMenu}
                alt="menu"
              />
            </Button>
            <SearchInput
              value={searchValue}
              onChange={(e: any) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center gap-4">
            <div style={{ position: "relative" }}>
              <Button
                className="border-0"
                style={{
                  backgroundColor: "transparent",
                }}
                onClick={() => {}}
              >
                <img
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                  src={iconHeart}
                  alt="heart"
                />
              </Button>
              {modalHeartData.showModal && (
                <Modal {...modalHeartData} closeModal={closeHeartModal} />
              )}
            </div>
            <div style={{ position: "relative" }}>
              <Button
                className="border-0"
                style={{
                  backgroundColor: "transparent",
                }}
                onClick={() => {}}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                  }}
                >
                  <Badge image={iconCart} />
                </div>
              </Button>
              {modalCartData.showModal && (
                <Modal {...modalCartData} closeModal={closeCartModal} />
              )}
            </div>
            <Button
              className="border-0"
              style={{
                backgroundColor: "transparent",
              }}
              onClick={() => {}}
            >
              <img
                style={{
                  width: "32px",
                  height: "32px",
                }}
                src={iconProfile}
                alt="profile"
              />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
