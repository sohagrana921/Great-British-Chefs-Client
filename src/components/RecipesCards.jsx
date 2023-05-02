import React, { useState } from "react";

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
import { Button, Card } from "flowbite-react";
const RecipesCards = ({ chefSpecial }) => {
  const { recipe_name, ingredients, cooking_method, rating, recipe_picture } =
    chefSpecial;
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteRecipe = () => {
    setFavorite(true);
    toast.success("The recipe added in your favorite");
  };
  return (
    <div>
      <div className="max-w-sm">
        <Card>
          <img className="h-52" src={recipe_picture} alt="" />
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {recipe_name}
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
            <small>{`${cooking_method.slice(0, 100)}.`}</small>
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
                <span className=" font-bold mr-1 ">Favorite</span>
                <FaHeart className="h-5 w-5 text-red-600 " />
              </Button>
              <Toaster />
            </div>
            <div></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecipesCards;
