import React, { useEffect, useState } from "react";
import ChefsCards from "./ChefsCards";
import RecipesCards from "./Recipes";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold my-20 text-blue-800">
        Ours Great British Chefs
      </h1>
      <div className="md:grid grid-cols-3 my-container gap-4">
        {chefs.map((chef) => (
          <ChefsCards key={chef.id} chef={chef}></ChefsCards>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
