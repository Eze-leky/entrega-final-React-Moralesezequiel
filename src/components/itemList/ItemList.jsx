import React from "react";
import Item from "../Item/Item";

const itemList = ({ items }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "espace-evenly",
        alignContent: "center",
      }}
    >
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default itemList;
