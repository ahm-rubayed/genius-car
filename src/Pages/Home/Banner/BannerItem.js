import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./BannerItem.css"

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="overlay">
          <img alt="" src={image} className="w-full rounded-2xl" />
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left-12 top-1/3">
          <h1 className="text-6xl">
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="text-slate-300 absolute flex justify-end transform -translate-y-1/2 left-12 top-1/2 w-6/12">
          <p className="text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="text-white absolute flex justify-end transform -translate-y-1/2 left-12 top-2/4 mt-24">
          <button class="btn bg-orange-600 mr-4">Discover More</button>
          <button class="btn btn-outline bg-none text-white hover:bg-orange-600">Latest project</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-4 bg-orange-600">
            <FaAngleLeft />
          </a>
          <a href={`#slide${next}`} className="btn btn-circle bg-orange-600">
            <FaAngleRight />
          </a>
        </div>
      </div>
  );
};

export default BannerItem;
