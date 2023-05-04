import { Card, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import LazyLoad from "react-lazy-load";

const BestRecipies = () => {
  const [bestRecipes, setBestRecipes] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://assignment-10-server-sohagrana921.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setBestRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  return (
    <div className="my-container">
      <h1 className="text-center mx-auto rounded text-white text-4xl my-5 py-3 px-5 bg-blue-600 w-3/5 font-bold ">
        Best Recipes
      </h1>
      <div className="md:grid grid-cols-3 gap-4">
        {bestRecipes.map((bestRecipe) => (
          <Card>
            <LazyLoad>
              <img
                className="h-52 w-full rounded"
                src={bestRecipe.recipe_picture}
                alt=""
              />
            </LazyLoad>
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {bestRecipe.recipe_name}
              </h5>
            </a>
            <p>
              <span className="text-xl font-bold">Ingredients:</span>
              {bestRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </p>
            <p>
              <span className="text-lg font-bold"> Cooking Method : </span>
              <small>{`${bestRecipe.cooking_method.slice(0, 100)}.`}</small>
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestRecipies;
