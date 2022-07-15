import React, { FC } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import styles from "./Breadcrumbs.module.scss";

interface Props {
  data: PropsData[];
}

interface PropsData {
  href: string;
  textContent: string;
}

const Breadcrumbs: FC<Props> = ({ data }) => {
  return (
    <div>
      <Breadcrumb className={styles.breadcrumbs} listTag="div">
        {data.map((_data, i, row) => {
          const lastItem = i + 1 === row.length;
          return (
            <BreadcrumbItem
            key={`${_data.href}-${_data.textContent}`}
              className="d-flex align-items-center"
              style={{
                color: lastItem ? "black" : "#C4C4C4",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "15px",
              }}
              href={_data.href}
              tag={lastItem ? "span" : "a"}
            >
              {_data.textContent}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
