import React from "react";
import "./styles.css"

const Tabs = ({ data }) => {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
    margin: "1rem 2rem",
  };
  return (
    <div style={style}>
      {data.map((item) => (
        <div className="card" key={item.productNo}>
          <img src={item.image} alt={item.name} width="200" height="250" />
          <h5>{item.name}</h5>
          <h4>{item.catagory}</h4>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
