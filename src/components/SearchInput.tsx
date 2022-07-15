import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";
import iconSearch from "assets/icon-search.svg";
import "./SearchInput.scss";

interface Props {
  value: string;
  onChange: any;
  classes?: string;
}

const SearchInput: FC<Props> = (props) => {
  return (
    <div className="position-relative">
      <img
        className="text-muted"
        style={{
          position: "absolute",
          height: "22px",
          width: "22px",
          left: "20px",
          top: "10px",
        }}
        src={iconSearch}
      />
      <Input
        {...props}
        id="search-input"
        bsSize="lg"
        style={{
          borderRadius: "50rem",
          paddingLeft: "50px",
          paddingRight: "30px",
          width: "320px",
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: "18px",
        }}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
