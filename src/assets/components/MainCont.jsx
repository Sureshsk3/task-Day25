import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/ComponentContext";
import Card from "react-bootstrap/Card";
import Sidebar from "./Sidebar";
export const priceContextComp = React.createContext();
function MainCont() {
  const { allData, setData } = useContext(UserContext);
  const [total, setTotal] = useState();
  const [value, setValue] = useState();


  const getData = () => {
    let sum = 0;
    allData.map((e) => {
      sum += e.caloriesPerServing * e.quantity;
      setValue(sum);
    });
  };

  useEffect(() => {
    getData();
  }, [allData]);

  const handleTouch = (price) => {
    setTotal(price);
  };

  const handleChange = (id, index) => {
    setData((prev) => {
      prev[index].quantity = Number(id);
      return [...prev];     
    });
  };

  return (
    <div className="container content-box mt-5">
      <section className="box-items">
        {allData.map((e, i) => {
          return (
            <Card style={{ width: "18rem" }} key={e.id} id="wrapper">
              <div id="con-item">
                <Card.Img variant="top" src={e.image} id="img-card" />
              </div>
              <div id="con-item">
                <Card.Body>
                  <Card.Title>{e.name}</Card.Title>
                  <Card.Text>
                    {" "}
                    <i>Rating : {e.rating}</i>
                  </Card.Text>
                  <Card.Text>
                    <i>Cuisine : {e.cuisine} </i>
                  </Card.Text>
                </Card.Body>
              </div>
              <div>
                <Card.Text
                  style={{ display: "inline" }}
                  onClick={() => handleTouch(e.caloriesPerServing)}
                >
                  <b>
                    <i id="drop-downprice">
                      Price : {e.caloriesPerServing} &euro;
                    </i>
                  </b>
                  <select
                    name="drop-down"
                    id="dropdown"
                    onChange={(e) => handleChange(e.target.value, i)}
                    value={e.quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </Card.Text>

                {e.value ? (
                  <button className="btn-remove btn btn-danger">Remove</button>
                ) : (
                  ""
                )}
              </div>
            </Card>
          );
        })}
      </section>
      <section>
        <priceContextComp.Provider value={{ value }}>
          <Sidebar />
        </priceContextComp.Provider>
      </section>
    </div>
  );
}

export default MainCont;
