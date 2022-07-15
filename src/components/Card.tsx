import React, { FC } from "react";

interface Props {
  image: string;
  name: string;
  price: string;
}
const Card: FC<Props> = ({ image, name, price }) => {
  const textStyle = {
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "18.75px",
    color: "black",
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <img src={image} style={{ width: "100%" }} />
      <div className="d-flex justify-content-between">
        <div className="pt-4" style={textStyle}>{name}</div>
        <div className="pt-4" style={textStyle}>{price}</div>
      </div>
    </div>
  );
};

export default Card;
