import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState(""); // Controlled input for name
  const [itemCategory, setItemCategory] = useState("Produce"); // Controlled input for category

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create new item
    const newItem = {
      id: uuid(), // Generate unique id
      name: itemName, // Get name from state
      category: itemCategory, // Get category from state
    };

    // Pass new item to parent through callback prop
    onItemFormSubmit(newItem);

    // Reset form fields
    setItemName("");
    setItemCategory("Produce"); // Reset category to the default value
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)} // Update state on input change
      />

      <label htmlFor="category">Category:</label>
      <select
        id="category"
        name="category"
        value={itemCategory}
        onChange={(e) => setItemCategory(e.target.value)} // Update state on category change
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
