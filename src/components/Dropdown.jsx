import React from "react";
function Dropdown(props) {
  function Clicked(event) {
    const name = event.target.name;
    let value;
    if (name === "Delivery") {
      value = !props.change.Delivery;
    } else if (name === "DineIn") {
      value = !props.change.DineIn;
    } else if (name === "TakeAway") {
      value = !props.change.TakeAway;
    } else if (name === "Paid") {
      value = !props.change.Paid;
    } else if (name === "Unpaid") {
      value = !props.change.Unpaid;
    } else if (name === "NewOrder") {
      value = !props.change.NewOrder;
    } else if (name === "OrderUpdated") {
      value = !props.change.OrderUpdated;
    }
    props.filter((prevtoSend) => {
      return {
        ...prevtoSend,
        [name]: value
      };
    });
    props.target();
  }
  if (props.field === "Order type") {
    return (
      <th className="dropdown">
        <button
          class="btn dropdown-toggle mx-0 px-0"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
              name="Delivery"
              type="checkbox"
              onClick={Clicked}
              value={!props.change.Delivery}
            />
            <label className="mx-1" style={{ color: "#E63946" }}>
              Delivery
            </label>
          </div>
          <div className="dropdown-item">
            <input
              name="DineIn"
              onClick={Clicked}
              value={!props.change.DineIn}
              type="checkbox"
            />
            <label className="mx-1" style={{ color: "#4361EE" }}>
              Dine in
            </label>
          </div>
          <div className="dropdown-item">
            <input
              name="TakeAway"
              onClick={Clicked}
              value={!props.change.TakeAway}
              type="checkbox"
            />
            <label className="mx-1" style={{ color: "#F7B801" }}>
              Take away
            </label>
          </div>
        </div>
      </th>
    );
  } else if (props.field === "Order status") {
    return (
      <th className="dropdown">
        <button
          className="btn dropdown-toggle mx-0 px-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
              name="NewOrder"
              value={!props.change.NewOrder}
              onClick={Clicked}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(235, 94, 40, 0.1)",
                color: "#EB5E28"
              }}
              className="mx-1"
            >
              New order
            </label>
          </div>
          <div className="dropdown-item">
            <input
              name="OrderUpdated"
              onClick={Clicked}
              value={!props.change.OrderUpdated}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(111, 45, 189, 0.1)",
                color: "#6F2DBD"
              }}
              className="mx-1"
            >
              Order updated
            </label>
          </div>
        </div>
      </th>
    );
  } else {
    return (
      <th className="dropdown">
        <button
          class="btn dropdown-toggle mx-0 px-0"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ color: "rgba(15, 25, 26, 0.5)" }}
        >
          {props.field}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <input
              name="Paid"
              onClick={Clicked}
              value={!props.change.Paid}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(47, 191, 113, 0.1)",
                color: "#2FBF71"
              }}
              className="mx-1"
            >
              Paid
            </label>
          </div>
          <div className="dropdown-item">
            <input
              name="Unpaid"
              onClick={Clicked}
              value={!props.change.Unpaid}
              type="checkbox"
            />
            <label
              style={{
                backgroundColor: "rgba(217, 4, 41, 0.1)",
                color: "#D90429"
              }}
              className="mx-1"
            >
              Unpaid
            </label>
          </div>
        </div>
      </th>
    );
  }
}
export default Dropdown;
