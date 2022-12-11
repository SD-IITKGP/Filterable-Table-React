import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from "../components/Table";
import Search from "../components/Search";
import Data from "../components/data";
import Filter from "../components/filter";
function App() {
  const [filteredData, changefilteredData] = useState([]);
  const [change, setChange] = useState({
    Delivery: false,
    DineIn: false,
    TakeAway: false,
    Paid: false,
    Unpaid: false,
    NewOrder: false,
    OrderUpdated: false
  });
  function filtering() {
    let newData = [];
    let flag = false;
    Data.forEach((data) => {
      if (data.OrderType === "Delivery" && change.Delivery === true) {
        flag = true;
      } else if (data.OrderType === "Dine in" && change.DineIn === true) {
        flag = true;
      } else if (data.OrderType === "Take away" && change.TakeAway === true) {
        flag = true;
      } else if (data.Payment === "Paid" && change.Paid === true) {
        flag = true;
      } else if (data.Payment === "Unpaid" && change.Unpaid === true) {
        flag = true;
      } else if (data.OrderStatus === "New Order" && change.NewOrder === true) {
        flag = true;
      } else if (
        data.OrderStatus === "Order Updated" &&
        change.OrderUpdated === true
      ) {
        flag = true;
      }
      if (flag === true) {
        newData.push(data);
      }
      flag = false;
    });
    if (Data !== newData) {
      changefilteredData(newData);
    }
  }
  setTimeout(filtering, 500);
  const str = ">";
  return (
    <div>
      <Header />
      <div className="container col-12">
        <div className="row">
          <div className="col-lg-2 Container-1 mx-1 my-2 text-right rounded">
            <button
              className="btn btn-danger text-light mx-1 my-2"
              style={{ width: "97%" }}
            >
              Orders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {str}
            </button>
          </div>
          <div className="col Container-2 my-2 rounded">
            <div className="col Container-2 my-2 rounded">
              <Search />
            </div>
            <h1 className="my-2 mx-3">Order details</h1>
            <div class="container pd-0 mx-0">
              {/* <div class="row">
                <div class="col-sm-10">
                  <Search />
                </div>
                <div class="col-sm-2">
                  <Filter
                    filteredData={filteredData}
                    target={filtering}
                    filter={setChange}
                    change={change}
                  />
                </div>
              </div> */}
              <div class="row">
                <div class="col">
                  <Search />
                </div>
                <div class="col-md-auto">
                  <Filter
                    filteredData={filteredData}
                    target={filtering}
                    filter={setChange}
                    change={change}
                  />
                </div>
                <div class="col col-lg-2">
                  <button
                    className="btn btn-light text-dark mx-1 my-2 border border-secondary"
                    style={{ width: "100%" }}
                  >
                    <img
                      className="mx-1"
                      style={{ width: "30px", height: "30px" }}
                      src="../date.jpg"
                      alt="date"
                    />
                    Today
                  </button>
                </div>
              </div>
            </div>
            <Table
              filteredData={filteredData}
              filtering={filtering}
              setChange={setChange}
              change={change}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
