import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm"; // Import the ItemForm component
import items from "../data/items"; // Import the 'items' array directly

function App() {
  const [itemsList, setItemsList] = useState(items); // Use imported 'items' here
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  function handleItemFormSubmit(newItem) {
    console.log("New Item Submitted:", newItem);
    setItemsList((prevItems) => {
      console.log("Previous Items:", prevItems);
      return [...prevItems, newItem];
    });
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList
        items={itemsList}
        selectedCategory={selectedCategory}
        onCategoryChange={(e) => setSelectedCategory(e.target.value)}
        search={search}
        onSearchChange={setSearch}
      />
    </div>
  );
}

export default App;
