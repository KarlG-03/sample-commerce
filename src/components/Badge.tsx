import React, { FC } from "react";

interface Props {
  image: string;
  badgeCount?: number;
}

const Badge: FC<Props> = ({ image, badgeCount = 2 }) => {
  return (
    <div
      className="position-relative"
      style={{ height: "100%", width: "100%" }}
    >
      <img src={image} style={{ height: "100%", width: "100%" }} />
      {badgeCount > 0 && (
        <div
          className="m-0 bg-white"
          style={{
            position: "absolute",
            top: "-5px",
            right: "-10px",
            fontSize: "12px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            lineHeight: "20px",
            textAlign: "center",
            color: "black",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

          }}
        >
          {badgeCount}
        </div>
      )}
    </div>
  );
};

export default Badge;
