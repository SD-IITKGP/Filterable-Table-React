import React from "react";
import Thead from "../components/Thead";
import Tbody from "../components/Tbody";
function Table(props) {
  return (
    <div
      className="container  border border-secondary rounded"
      style={{ textAlign: "center" }}
    >
      <table className="table">
        <Thead
          target={props.filtering}
          filter={props.setChange}
          change={props.change}
        />
        <Tbody Data={props.filteredData} />
      </table>
    </div>
  );
}
export default Table;
