import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/AppReducer/action";

export default function EmployeeData() {
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeData);

  useEffect(() => {
    dispatch(getEmployeeData());
  }, []);
  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h2>Employee Data</h2>
      <div
        className="employee_data"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
      >
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}
        {employeeData?.map((item) => {
          return (
            <div>
              <img
                src={item.image}
                style={{ maxWidth: "100%" }}
                alt="employee"
              />
              <h3>{item.name}</h3>
              <p>{item.gender}</p>
              <p>{item.department}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
