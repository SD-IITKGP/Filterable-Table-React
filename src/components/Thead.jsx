import React from "react";
import HeadItem from "../components/headitem";
function Thead(props) {
  const headFields = [
    "Order Id",
    "Table no",
    "Customer Name",
    "Order type",
    "Order status",
    "Payment",
    "Date and Time",
    "View Order"
  ];
  return (
    <thead>
      <HeadItem
        target={props.target}
        change={props.change}
        filter={props.filter}
        fields={headFields}
      />
    </thead>
  );
}
export default Thead;
