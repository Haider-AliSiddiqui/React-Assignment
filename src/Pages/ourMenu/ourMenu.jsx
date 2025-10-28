import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ourMenu.css";


const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]); 
  const [selectedMeal, setSelectedMeal] = useState("All");


  useEffect(() => {
    const apicall = async () => {
      const apiUrl = "https://dummyjson.com/recipes";
      try {
        const res = await axios.get(apiUrl);
        res && setMenu(res?.data?.recipes);
        setFilteredMenu(res.data.recipes);
      } catch (error) {
        console.log("Something went wrong in apicall " + error);
      }
    };
    apicall();
  }, []);
  console.log("Menu Data:", menu);

   const handleFilter = (mealType) => {
    setSelectedMeal(mealType);
    if (mealType === selectedMeal || mealType === "All") {
      setFilteredMenu(menu);
    } else {
      const filtered = menu.filter((item) =>
        item.mealType?.some(
          (type) => type.toLowerCase() === mealType.toLowerCase()
        )
      );
      setFilteredMenu(filtered);
    }
  };

  return (
    <section className="menu-section">
      <h1 className="menu-title">Our Menu</h1>
      <div className="underline"></div>

      <div className="btn-container">
        {["All", "Breakfast", "Lunch", "Dinner"].map((meal) => (
          <button
            key={meal}
            className={`filter-btn ${
              selectedMeal === meal ? "active-btn" : ""
            }`}
            onClick={() => handleFilter(meal)}
          >
            {meal}
          </button>
        ))}
      </div>

      <div className="menu-container">
        {filteredMenu.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.title} className="image" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="name">{item?.name}</h4>
              </header>
              <p className="item-text">
                {item.instructions}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;


