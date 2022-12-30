import React from "react";
import Typewriter from "typewriter-effect";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { BsFillPersonLinesFill, BsSpotify } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center pt-10">
        <div>
          <p className="text-md tracking-widest text-gray-600">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "1B Software Engineering @the University of Waterloo"
                  )
                  .start();
              }}
            />
          </p>
          <h1 className="py-4 text-gray-700 ">
            Hey! I'm <span className="text-[#116466]">Peter</span>
          </h1>
          <h2 className="py-2 tet-gray-700">Aspiring <span className="text-[#1c9b9e]">Full Stack Developer</span></h2>
          <p className="py-4 text-gray-600 max-w-[54.5%] m-auto text-justify text-lg leading-8">
            My friends know me as <span className="text-[#604f79] font-semibold">PeteMango</span>, a kid fascinated about anything and
            everything in the field of computer science, engineering and
            mathematics. Passionate about writing code that can change the
            world, I am currently working with Watonomous to design a level four
            autonomous vehicle for the University of Waterloo's Alternative
            Fuels Team (UWAFT) competing in this year's EcoCar Challenge.
          </p>
          <div className="flex items-center justify-between max-w-[413px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/peter-wang-1aa901206/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/PeteMango"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:whcpeterwang@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
            <div
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300"
            >
              <AiFillMail />
            </div>
            </a>
            <a
              href="https://open.spotify.com/user/whcpeterwang?si=c5015e15e790474a"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <BsSpotify />
              </div>
            </a>
            <a
              href="https://www.instagram.com/pete._.mango/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <RiInstagramFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
