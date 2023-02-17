import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeeData } from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const dispatch = useDispatch();
  const coffeeData = useSelector((state) => state.coffeeData);
  useEffect(() => {
    dispatch(getCoffeeData());
  }, []);
  console.log(coffeeData);
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2>Coffee Data</h2>
      <div
        className="coffee_data"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
        {coffeeData?.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.image} alt="coffee" style={{ maxWidth: "100%" }} />
              <h3>{item.title}</h3>
              <h4>{item.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
