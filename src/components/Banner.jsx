import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="my-container h-96  xl:h-80 2xl:h-96 ">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-pink-950 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg"
                src="https://i.ytimg.com/vi/sdeFDWFN47s/maxresdefault.jpg"
                alt=""
              />
            </div>
            <div>
              <p>
                <img
                  className="font-extrabold"
                  src="https://media-cdn2.greatbritishchefs.com/media/t15pcz3v/img48591.png"
                  alt=""
                />
              </p>

              <p className="py-2 text-white font-semibold">
                Inspiring food lovers everywhere
              </p>
              <div className="text-right text-white mr-10 mt-10">
                <p>
                  This week on <br /> Great British Chefs
                </p>

                <Link to="/bestRecipes">
                  <button className="banner-btn mt-4">See Best Recipes</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-pink-950 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg "
                src="https://img.freepik.com/free-photo/portrait-smiling-chef-uniform_329181-675.jpg"
                alt=""
              />
            </div>
            <div>
              <p>
                <img
                  className="font-extrabold"
                  src="https://media-cdn2.greatbritishchefs.com/media/t15pcz3v/img48591.png"
                  alt=""
                />
              </p>

              <p className="py-2 text-white font-semibold">
                Inspiring food lovers everywhere
              </p>
              <div className="text-right text-white mr-10 mt-10">
                <p>
                  This week on <br /> Great British Chefs
                </p>

                <Link to="/bestRecipes">
                  <button className="banner-btn mt-4">See Best Recipes</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-pink-950 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg"
                src="https://global-uploads.webflow.com/5f0082d019150187c1bdb9ca/63d0f6d18842ecf4ddb10ba3_chef%20adalah%20(1).webp"
                alt=""
              />
            </div>
            <div>
              <p>
                <img
                  className="font-extrabold"
                  src="https://media-cdn2.greatbritishchefs.com/media/t15pcz3v/img48591.png"
                  alt=""
                />
              </p>

              <p className="py-2 text-white font-semibold">
                Inspiring food lovers everywhere
              </p>
              <div className="text-right text-white mr-10 mt-10">
                <p>
                  This week on <br /> Great British Chefs
                </p>
                <Link to="/bestRecipes">
                  <button className="banner-btn mt-4">See Best Recipes</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
