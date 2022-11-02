import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="overlay">
          <img alt="" src={image} className="w-full" />
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3">
          <h1 className="text-6xl">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2 w-6/12">
          <p className="text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left-5 top-2/3">
          <button class="btn btn-secondary mr-4">Discover More</button>
          <button class="btn btn-outline btn-primary">Latest project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-4 red-color">
            <FaAngleLeft />
          </a>
          <a href={`#slide${next}`} className="btn btn-circle red-color">
            <FaAngleRight />
          </a>
        </div>
      </div>
  );
};

export default BannerItem;
