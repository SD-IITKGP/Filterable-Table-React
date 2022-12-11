import React from "react";
import Dropdown from "../components/Dropdown";
function HeadItem(props) {
  return (
    <tr>
      {props.fields.map((field) => {
        if (
          field === "Order type" ||
          field === "Order status" ||
          field === "Payment"
        ) {
          return (
            <Dropdown
              target={props.target}
              change={props.change}
              filter={props.filter}
              field={field}
            />
          );
        } else {
          return (
            <th scope="col" style={{ color: "rgba(15, 25, 26, 0.5)" }}>
              {field}
            </th>
          );
        }
      })}
    </tr>
  );
}
export default HeadItem;
