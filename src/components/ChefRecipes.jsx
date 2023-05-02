import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiThumbUp } from "react-icons/hi";
import { useLoaderData, useParams } from "react-router-dom";
import RecipesCards from "./RecipesCards";

const ChefRecipes = () => {
  const data = useParams();
  const chefs = useLoaderData();
  const filterData = chefs.find((p) => p.id == data.id);

  const {
    chef_picture,
    chef_name,
    bio,
    likes,
    years_of_experience,
    num_recipes,
  } = filterData;

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);
  //   console.log(recipes);
  return (
    <div className="mx-auto my-container">
      <Card>
        <div className="md:flex gap-16 ">
          <img className="rounded-lg w-64 h-80" src={chef_picture} alt="" />
          <div className="text-start">
            <h5 className="mb-1 text-2xl font-bold text-black dark:text-white">
              {chef_name}
            </h5>
            <p className="my-6">
              <span className="text-lg  text-black  font-semibold">
                Description :-
              </span>
              <small>{bio}</small>
            </p>
            <div className="text-xl my-4 text-center  font-semibold text-black">
              <div className="flex items-center">
                <span className="text-sm mr-4 text-gray-500 dark:text-gray-400">
                  Experience : {years_of_experience} Years
                </span>
                <span className="text-sm text-gray-500 mr-4 dark:text-gray-400">
                  Recipes : {num_recipes}
                </span>
                <span className="text-blue-500 flex items-center">
                  <HiThumbUp className="mr-2 h-5 w-5 "></HiThumbUp>
                  {likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <h1 className="text-4xl text-center font-bold my-16 text-blue-800">
        Chef's recipes
      </h1>
      <div className="md:grid grid-cols-3  my-20 gap-4">
        {recipes.map((recipe) => (
          <RecipesCards key={recipe.recipe_id} recipe={recipe}></RecipesCards>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
