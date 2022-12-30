import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import ItemImg from "../public/assets/navLogo.png";
import FOURFUN from "../public/assets/SE101.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-4 tracking-widest text-[#2f4454]"> Projects </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#604f79] font-semibold">
              SE101: 4Fun Personal Trainer
            </h3>
            <h5 className="text-[#A68CA4] font-semibold pt-2">ReactJS, Flask, Beautiful Soup, Ardunio</h5>
            <p className="py-2 text-gray-600 text-justify text-lg leading-9">
              Easily mounted onto any weight stack, the 4Gains unit provides
              immediate feedback to the user on the quality of their workout
              sessions through its various sensors. Upon a button press on the
              device, the program begins to track a variety of metrics,
              including session duration, number of reps performed, movement
              distance, acceleration, and stability. The program then offers the
              user a visual representation of their fitness progress, which they
              can access through a web application. We envision 4Gains as a tool
              that makes fitness more accessible to novice gym-goers while
              providing valuable personalized suggestions to veterans.
            </p>
          </div>
          <div className="w-full h-auto m-auto rounded-xl first-line:flex items-center jusitify-center p-4 hover:scale-105 ease-in duration-300">
            <Link href="/property">
              <img
                src="../assets/SE101.png"
                alt="..."
                class="shadow-xl rounded-xl max-w-full h-auto align-middle border-none scale-y-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
