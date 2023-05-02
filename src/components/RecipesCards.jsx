import { Button, Card, Toast } from "flowbite-react";
import React, { useEffect, useState } from "react";

import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
  FaHeart,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { HiCheck } from "react-icons/hi";
import Rating from "react-rating";
const RecipesCards = ({ recipe }) => {
  const [favorite, setFavorite] = useState(false);
  const { name, pic, ingredients, cookingMethod, rating, recipe_id } = recipe;
  const handleFavoriteRecipe = () => {
    setFavorite(true);
    toast.success("The recipe added in your favorite");
  };

  return (
    <div className="max-w-sm">
      <Card imgSrc={pic}>
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p>
          <span className="text-xl font-bold">Ingredients:</span>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </p>
        <p>
          <span className="text-lg font-bold"> Cooking Method : </span>
          <small>{cookingMethod}</small>
        </p>

        <div className="flex items-center gap-2">
          <div>
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span> {rating}</span>
          </div>
          <div
            className="
          "
          >
            <Button
              onClick={handleFavoriteRecipe}
              disabled={favorite}
              outline={true}
              pill={true}
            >
              <span className="text-lg font-bold ">Favorite</span>
              <FaHeart className="h-6 w-6 text-red-600 ml-2" />
            </Button>
            <Toaster />
          </div>
          <div></div>
        </div>
      </Card>
    </div>
  );
};

export default RecipesCards;
