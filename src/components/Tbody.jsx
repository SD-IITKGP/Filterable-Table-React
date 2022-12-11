import React from "react";
import BodyItem from "../components/bodyitem";
function Tbody(props) {
  return (
    <tbody>
      {props.Data.map((order, index) => (
        <BodyItem order={order} index={index} />
      ))}
    </tbody>
  );
}
export default Tbody;
