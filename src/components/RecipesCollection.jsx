import { Accordion } from "flowbite-react";
import React from "react";
import { HiOutlineArrowCircleDown } from "react-icons/hi";

const RecipesCollection = () => {
  return (
    <div className="my-container my-20 flex gap-5 items-center">
      <div className="w-2/5">
        <Accordion collapseAll={true} arrowIcon={HiOutlineArrowCircleDown}>
          <Accordion.Panel>
            <Accordion.Title>Instant Pot Recipes?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Instant Pot Chicken and Rice
                <li>
                  Add all ingredients to the Instant Pot and stir to combine.
                  Close the lid and set the valve to sealing position. Cook on
                  high pressure for 10 minutes. Let the pressure release
                  naturally for 5 minutes, then quick release any remaining
                  pressure. Open the lid and stir the chicken and rice. Serve
                  hot.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Vegan Recipes?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Vegan Lentil and Vegetable Stir-Fry
                <li>
                  Cook the lentils according to package instructions. In a large
                  skillet or wok, heat the sesame oil over medium-high heat. Add
                  the onion and garlic and sauté for 2-3 minutes, until
                  fragrant. Add the red bell pepper, broccoli, and snow peas and
                  stir-fry for 5-7 minutes, until the vegetables are tender. Add
                  the cooked lentils, soy sauce, ground ginger, salt, and pepper
                  to the skillet and stir-fry for another 2-3 minutes. Serve
                  hot.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Meal Prep Recipes?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Meal Prep Chicken and Vegetables
                <li>
                  Preheat the oven to 400°F. In a large bowl, whisk together the
                  olive oil, garlic powder, thyme, salt, and pepper. Add the
                  chicken breasts and vegetables to the bowl and toss to coat.
                  Spread the chicken and vegetables out on a baking sheet. Bake
                  for 20-25 minutes, or until the chicken is cooked through and
                  the vegetables are tender. Divide the chicken and vegetables
                  into 4 containers and store in the fridge for up to 4 days.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Soup Recipes?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Lentil Soup
                <li>
                  In a large pot, heat some oil over medium-high heat. Add the
                  onion and garlic and sauté for 2-3 minutes, until fragrant.
                  Add the carrot and celery and sauté for another 2-3 minutes.
                  Add the lentils, vegetable broth, cumin, smoked paprika, salt,
                  and pepper to the pot and stir to combine. Bring the soup to a
                  boil, then reduce the heat to low and let it simmer for 25-30
                  minutes, until the lentils are tender. Serve hot.
                </li>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
      <img
        className="w-3/5 rounded"
        src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/54/08/67/mLtVelBSthanFYXdhrUw_Salad-Bar-15.jpg"
        alt=""
      />
    </div>
  );
};

export default RecipesCollection;
