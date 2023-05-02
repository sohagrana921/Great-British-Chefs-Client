import React, { useEffect, useState } from "react";

const RecipesCards = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h2>All recipes here</h2>
    </div>
  );
};

export default RecipesCards;
