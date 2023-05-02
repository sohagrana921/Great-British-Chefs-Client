import React, { useEffect, useState } from "react";

import RecipesCards from "./RecipesCards";
const Recipes = ({ id }) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  const filterRecipes = recipes.filter((p) => p.chef_id == id);

  return (
    <div>
      <div className="md:grid grid-cols-3 gap-4">
        {filterRecipes.map((chefSpecial) => (
          <RecipesCards
            key={chefSpecial.id}
            chefSpecial={chefSpecial}
          ></RecipesCards>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
