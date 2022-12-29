import React from "react";
import Image from "next/image";
import Link from "next/link";
import ME from "../public/assets/me.jpeg";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {" "}
            About Me{" "}
          </p>
          <h2 className="py-4"> Who I am </h2>
          <p className="py-2 text-gray-600">
            {" "}
            I am passionate about everything in the realm of computer science,
            robotics and artificial intelligence. I am currently a member of
            WATonomous working towards designing a level four autonomous vehicle
            for the University of Waterloo Alternative Fuels Team (UWAFT)
            competing in the EcoCar Challenge.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            In my spare time, you can find me rock climbing with my friends in a
            match of WeiQi or skateboarding through the night! Feel free to
            check out my projects and shoot me a message through any of the
            contact methods below.{" "}
          </p>
          <p> Check out some of my latest projects. </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center jusitify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={ME} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
