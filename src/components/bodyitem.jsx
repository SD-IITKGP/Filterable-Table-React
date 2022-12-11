import React from "react";
function bodyItem(props) {
  let orderTypeColor = {};
  if (props.order.OrderType === "Delivery") {
    orderTypeColor = { color: "#E63946" };
  } else if (props.order.OrderType === "Dine in") {
    orderTypeColor = { color: "#4361EE" };
  } else {
    orderTypeColor = { color: "#F7B801" };
  }
  return (
    <tr>
      <th className="row" style={{ color: "#4361EE" }}>
        {props.order.OrderId}
      </th>
      <td>{props.index + 1}</td>
      <td>{props.order.CustomerName}</td>
      <td className="px-0 mx-0" style={orderTypeColor}>
        {props.order.OrderType}
      </td>
      <td>
        <button
          className="brn rounded py-2 border-0 px-2"
          style={{
            backgroundColor:
              props.order.OrderStatus === "New Order"
                ? "rgba(235, 94, 40, 0.1)"
                : "rgba(111, 45, 189, 0.1)",
            color:
              props.order.OrderStatus === "New Order" ? "#EB5E28" : "#6F2DBD"
          }}
        >
          {props.order.OrderStatus}
        </button>
      </td>
      <td>
        <button
          className="rounded mx-3 py-1 border-0 px-2"
          style={{
            backgroundColor:
              props.order.Payment === "Paid"
                ? "rgba(47, 191, 113, 0.1)"
                : "rgba(217, 4, 41, 0.1)",
            color: props.order.Payment === "Paid" ? "#2FBF71" : "#D90429"
          }}
        >
          {props.order.Payment}
        </button>
      </td>
      <td>{props.order.DateTime}</td>
      <td>
        <a href={props.order.OrderLink}>
          <img
            style={{ width: "30px", height: "30px" }}
            src="../link.jpg"
            alt="order link"
          />
        </a>
      </td>
    </tr>
  );
}
export default bodyItem;
