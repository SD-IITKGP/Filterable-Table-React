import React from "react";
function Filter(props) {
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
  return (
    <div class="btn-group">
      <button
        type="button"
        className="btn btn-light border border-secondary rounded my-2"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          className="mx-1"
          style={{ width: "30px", height: "30px" }}
          src="../filter.jpg"
          alt="filter"
        />
        Filters
      </button>
      <div class="dropdown-menu">
        <h6 class="dropdown-header">Order Status</h6>
        <div className="dropdown-item mx-1 px-0 text-left">
          <input
            name="Delivery"
            type="checkbox"
            onClick={Clicked}
            value={!props.change.Delivery}
          />
          <label className="mx-1">Delivery</label>
        </div>
        <div className="dropdown-item mx-1 px-0 text-left">
          <input
            name="DineIn"
            onClick={Clicked}
            value={!props.change.DineIn}
            type="checkbox"
          />
          <label className="mx-1">Dine in</label>
        </div>
        <div className="dropdown-item mx-1 px-0  text-left">
          <input
            name="TakeAway"
            onClick={Clicked}
            value={!props.change.TakeAway}
            type="checkbox"
          />
          <label className="mx-1">Take away</label>
          <h6 class="dropdown-header">Payment</h6>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              name="Paid"
              onClick={Clicked}
              value={!props.change.Paid}
              type="checkbox"
            />
            <label className="mx-1">Paid</label>
          </div>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              name="Unpaid"
              onClick={Clicked}
              value={!props.change.Unpaid}
              type="checkbox"
            />
            <label className="mx-1">Unpaid</label>
          </div>
          <h6 class="dropdown-header">Order Type</h6>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              name="NewOrder"
              value={!props.change.NewOrder}
              onClick={Clicked}
              type="checkbox"
            />
            <label className="mx-1">New order</label>
          </div>
          <div className="dropdown-item mx-1 px-0 text-left">
            <input
              name="OrderUpdated"
              onClick={Clicked}
              value={!props.change.OrderUpdated}
              type="checkbox"
            />
            <label className="mx-1">Order updated</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
