import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  const restaurantData = useSelector((state) => state.restaurantData);

  useEffect(() => {
    dispatch(getRestaurantData());
  }, []);
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2> Restaurant Data </h2>
      <div
        className="restaurant_data"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {restaurantData?.map((item) => {
          return (
            <div>
              <img
                src={item.image}
                alt="restaurant"
                style={{ minWidth: "100%" }}
              />
              <h3>{item.name}</h3>
              <p>{item.type}</p>
              <p>{item.rating}</p>
              <p>{item.number_of_votes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
