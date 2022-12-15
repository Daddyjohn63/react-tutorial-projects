import React, { useState } from "react";
import Menu from "./Menu"; //will display the list
import Categories from "./Categories"; //will display the buttons/ menu filter.
import items from "./data"; //the data
//gets all unique values (categories), chnages the object into an array and adds the term 'all' to the array. 'Set' will return only the unique values
const allCategories = ["all", ...new Set(items.map(item => item.category))];
console.log(allCategories);

function App() {
  //remember: menuItems represents the state , setMenuItems is used to change the state. useState(items) represents the starting state.
  const [menuItems, setMenuItems] = useState(items);
  // create a state for categories, where inital state is all categories.
  const [categories, setCategories] = useState(allCategories);

  //create a function that takes in a category, checks if it is 'all' , if not it filters the items by the category passed in and this array is then passed into our new state.
  const filterItems = category => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    //filter items where the item category from the data (items) is equal to the category we are passing in.
    const newItems = items.filter(item => item.category === category);
    //pass newItems into the state.
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        {/* pass the categories and the filterItems function in as propos so availabel to the Categories component */}
        <Categories categories={categories} filterItems={filterItems} />
        {/* pass props into items (the data), by passing in the state */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
