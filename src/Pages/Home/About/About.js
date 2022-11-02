import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <div className="w-2/4 relative">
          <img
            src={person}
            className=" rounded-lg shadow-2xl h-96 w-96 object-cover "
            alt=""
          />
          <img
            src={parts}
            className=" rounded-lg shadow-2xl absolute top-2/4 left-1/3
          h-64 w-72 object-cover border-8 border-white"
            alt=""
          />
        </div>
        <div className="w-2/4">
          <span className="text-orange-600 font-semibold">About Us</span>
          <h1 className="text-5xl font-bold my-4">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-slate-500">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-slate-500">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn bg-orange-600 border-0 hover:bg-orange-700 mt-6">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
