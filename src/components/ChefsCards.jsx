import { Button, Card, Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmRight, HiThumbUp } from "react-icons/hi";
import LazyLoad from "react-lazy-load";

const ChefsCards = ({ chef }) => {
  const {
    id,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
    chef_picture,
  } = chef;

  return (
    <div>
      <div className="max-w-sm">
        <Card>
          <div className="flex flex-col rounded-lg items-center pb-10 bg-pink-950 ">
            <LazyLoad>
              <img
                className="mb-3 h-36 rounded w-52 shadow pt-6"
                src={chef_picture}
                alt="Bonnie image"
              />
            </LazyLoad>
            <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
              {chef_name}
            </h5>
            <div className="text-xl text-center  font-semibold ">
              <div className="d-flex">
                <span className="text-sm mr-4 text-white dark:text-gray-400">
                  Experience : {years_of_experience} Years
                </span>
                <span className="text-sm text-white dark:text-gray-400">
                  Recipes : {num_recipes}
                </span>
              </div>

              <span className="text-blue-500 flex items-center mt-2 ml-20">
                <HiThumbUp className="mr-2 h-5 w-5 "></HiThumbUp>
                {likes}
              </span>
            </div>
            <div className="mt-4  space-x-3 lg:mt-6"></div>
            <Link to={`/recipes/${id}`}>
              <Button outline={true}>
                View Recipes
                <HiOutlineArrowSmRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChefsCards;
