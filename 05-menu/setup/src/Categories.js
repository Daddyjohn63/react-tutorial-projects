import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        //console.log(index);
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
            // onclick we call filterItems and pass in the category. filterItems function will filter the data and return the new list.
          >
            {category}
            {/* adds the category name */}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
