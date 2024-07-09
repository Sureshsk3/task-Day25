import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { priceContextComp } from "./MainCont";
function Sidebar() {
  let {value} = useContext(priceContextComp);


  return (
    <>
      <Card style={{ width: "18rem" }} id="price-card">
        <Card.Body>
          <div className="carditems">
            <span>SUBTOTAL :  </span>
            <span>{value} &euro;</span>
          </div>
          &nbsp;
          <div className="carditems">
            <span>SHIPPING : </span>
            <span>FREE</span>
          </div>
          <hr />
          <div className="carditems items">
            <span>TOTAL : </span>
            <span><b>{value} &euro;</b></span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Sidebar;
