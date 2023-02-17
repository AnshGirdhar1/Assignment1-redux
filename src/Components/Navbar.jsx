import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="navbar"
      style={{
        background: "black",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        height: "70px",
        alignItems: "center",
      }}
    >
      {/*Provide the three links here */}
      <Link
        to="/coffee-data"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Coffee Data
      </Link>
      <Link
        to="/restaurant-data"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Restaurant Data
      </Link>
      <Link
        to="/employee-data"
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Employee Data
      </Link>
    </div>
  );
}

export { Navbar };
