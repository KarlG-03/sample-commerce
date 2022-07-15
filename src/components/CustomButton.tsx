import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, ReactNode, SVGProps } from "react";
import { Button as ReactstrapButton } from "reactstrap";

interface Props {
  image?: string;
  children?: ReactNode;
  className?: string;
  onClick?: any;
  style? :any
}

const CustomButton: FC<Props> = ({ image, children, className, onClick ,style}) => {
  return (
    <ReactstrapButton
      className={`rounded-pill border-0 ${className}`}
      style={{
        fontWeight: 500,
        fontSize: "20px",
        lineHeight: "23.44px",
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        ...style
      }}
      onClick={onClick}
    >
      {image && <img src={image} className="me-2" />}
      {children}
    </ReactstrapButton>
  );
};

export default CustomButton;
