import { Carousel } from "flowbite-react";
import React from "react";

const Banner = () => {
  return (
    <div className="my-container h-96  xl:h-80 2xl:h-96 ">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/premium-photo/set-marinated-mushrooms-with-onions-spices-plate-rustic-background-top-view-banner_187166-26250.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold  ">
                Who Made the Best Blend? <br />
                <span className="text-blue-500"> Vote Now!</span>
              </h1>
              <p className="py-2">
                Five Allrecipes Allstars created their best original recipe
                featuring mushrooms and ground meat-and now we need to pick the
                winner. Cast your vote, and you could win $1,000!
              </p>
              <button className="btn mt-2 ">Vote</button>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/premium-photo/set-marinated-mushrooms-with-onions-spices-plate-rustic-background-top-view-banner_187166-26250.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold  ">
                Who Made the Best Blend? <br />
                <span className="text-blue-500"> Vote Now!</span>
              </h1>
              <p className="py-2">
                Five Allrecipes Allstars created their best original recipe
                featuring mushrooms and ground meat-and now we need to pick the
                winner. Cast your vote, and you could win $1,000!
              </p>
              <button className="btn mt-2 ">Vote</button>
            </div>
          </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <div className="flex justify-between gap-10 p-10 items-center ">
            <div>
              <img
                className="rounded-lg"
                src="https://img.freepik.com/premium-photo/set-marinated-mushrooms-with-onions-spices-plate-rustic-background-top-view-banner_187166-26250.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold  ">
                Who Made the Best Blend? <br />
                <span className="text-blue-500"> Vote Now!</span>
              </h1>
              <p className="py-2">
                Five Allrecipes Allstars created their best original recipe
                featuring mushrooms and ground meat-and now we need to pick the
                winner. Cast your vote, and you could win $1,000!
              </p>
              <button className="btn mt-2 ">Vote</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
