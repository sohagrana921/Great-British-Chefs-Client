import { Button, Card, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import RecipesCollection from "./RecipesCollection";

const NewestRecipes = () => {
  const [latest, setLatest] = useState([]);
  useEffect(() => {
    fetch("https://assignment-10-server-sohagrana921.vercel.app/newestrecipes/")
      .then((res) => res.json())
      .then((data) => setLatest(data));
  }, []);

  return (
    <div>
      <div className="flex h-full items-center justify-center my-container dark:bg-gray-700 dark:text-white">
        <div className="md:flex justify-between gap-10 p-10 items-center ">
          <div>
            <h1 className="text-4xl font-bold">
              Inspiring food lovers everywhere
            </h1>
            <p className="py-2  font-semibold">
              Great British Chefs is the team behind the fastest growing food
              websites in the UK Both sites are go-to destinations for foodies
              in search of recipe inspiration, cooking guides and in-depth
              features on the world of food, drink, cooking and chefs.
            </p>
          </div>
          <div>
            <img
              className="rounded-lg "
              src="https://media-cdn2.greatbritishchefs.com/media/xfwndv3c/about-us-header.whqc_1423x711q90.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1 className="text-4xl text-blue-700 font-bold text-center my-10">
        Newest Recipes
      </h1>
      <div className="md:grid grid-cols-3 gap-5 my-container">
        {latest.map((singleRecipe) => (
          <Card key={singleRecipe.id}>
            <img className="h-80" src={singleRecipe.recipe_picture} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {singleRecipe.recipe_name}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Cook By : </span>
              {singleRecipe.chef_name}
            </p>
            <div>
              <Rating
                placeholderRating={singleRecipe.rating}
                readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}
              ></Rating>
              <span> {singleRecipe.rating}</span>
            </div>
          </Card>
        ))}
      </div>
      <RecipesCollection></RecipesCollection>
    </div>
  );
};

export default NewestRecipes;
