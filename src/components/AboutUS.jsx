import { Button } from "flowbite-react";
import React from "react";

const AboutUS = () => {
  return (
    <div>
      <div className="flex  items-center my-container">
        <h1 className="text-center mx-auto rounded text-white text-4xl my-5 py-3 px-5 bg-blue-600 w-3/5 font-bold ">
          Our Mission and Vision
        </h1>
      </div>

      <div className="flex gap-5 my-container">
        <div>
          <h1 className="text-3xl font-semibold text-center my-3">
            Who we are
          </h1>
          <p>
            Great British Chefs is an entrepreneurial business that was founded
            in 2010 with the ambition of being the go-to website for foodies and
            the preferred partner of a select group of premium food brands. We
            believe that most food websites cater to the lowest common
            denominator, but foodies want more. We work with the finest chefs
            and food writers to create recipes, guides, features and videos that
            inspire foodies to cook for themselves and others, all whilst
            celebrating the diversity of Britain's food scene.
          </p>
          <Button className="my-4" outline={true}>
            Meet Ours Chefs
          </Button>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-center my-3">
            What we do
          </h1>
          <p>
            We have collected over 10,000 recipes from the most interesting and
            inspiring chefs and food writers cooking in Britain and Italy today.
            Our content is designed to inspire foodies – from cooking with squid
            ink and learning to spherify to mastering knife skills and
            barbecuing lamb, we have recipe ideas and how-to-cook articles
            covered. We also bring you unique experiences, regular competitions,
            in-depth features and the latest in food trends.
          </p>
          <Button className="my-4" outline={true}>
            Make a recipe
          </Button>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-center my-3">
            Get involved
          </h1>
          <p>
            Our community of one million like-minded foodies come to Great
            British Chefs for all their culinary inspiration, and by registering
            for an account you get access to a recipe binder and regular
            newsletters. You can also join our Cookbook Club on Facebook or sign
            up to the Great British Chefs Club, which offers unlimited access to
            our content, exclusive recipes, videos and competitions, plus – if
            you opt to become a Gold member – free gifts delivered to your door.
          </p>
          <Button className="my-4" outline={true}>
            Join In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
