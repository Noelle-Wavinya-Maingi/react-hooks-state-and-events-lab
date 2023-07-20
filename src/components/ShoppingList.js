import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterby, setFilterBy] = useState("All");

  const productsToDisplay = items.filter((item) => {
    if (filterby !== "All") {
      return item.category === filterby;
    } else {
      return true;
    }
  });

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {productsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
