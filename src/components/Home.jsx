import React from "react";
import Banner from "./Banner";

import Chefs from "./Chefs";
import NewestRecipes from "./NewestRecipes";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "flowbite-react";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }
  return (
    <div>
      <Banner></Banner>
      <Chefs></Chefs>
      <NewestRecipes></NewestRecipes>
    </div>
  );
};

export default Home;
