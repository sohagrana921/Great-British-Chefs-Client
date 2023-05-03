import React from "react";
import Banner from "./Banner";

import Chefs from "./Chefs";
import NewestRecipes from "./NewestRecipes";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;
