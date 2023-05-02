import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefRecipes = () => {
  const data = useParams();
  const chefs = useLoaderData();
  const filterData = chefs.find((p) => p.id == data.id);
  console.log(filterData);
  const { chef_picture } = filterData;
  return (
    <div>
      <div className="max-w-sm mx-auto">
        <Card horizontal={true} imgSrc={chef_picture}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ChefRecipes;
