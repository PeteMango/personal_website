import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import ItemImg from "../public/assets/navLogo.png";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillMail,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { SiDevpost } from "react-icons/si";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-20">
        <h2 className="py-4 tracking-widest text-[#2f4454]"> Projects </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#604f79] font-semibold">
              SE101: 4Fun Personal Trainer
            </h3>
            <h6 className="text-[#A68CA4] font-semibold pt-2">
              ReactJS, TailwindCSS, VictoryCharts, Flask, MongoDB, Beautiful
              Soup, Ardunio
            </h6>
            <p className="py-2 text-gray-600 text-justify text-lg leading-8">
              The reopening of public gyms has attracted an influx of fitness
              lovers as the world gradually recovers from the effects of the
              pandemic. In particular, we saw a massive wave of fitness craze
              among our peers while transitioning into university as workout
              sessions became integral to many students’ daily routines. As
              frequent gym-goers, we were inspired by this phenomenon to create
              “4Gains”—a product that targets the growing fitness demographic
              and improves the gym experience for all fitness lovers, beginners,
              and pro athletes alike.
            </p>
            <p className="py-2 text-gray-600 text-justify text-lg leading-8">
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
            <h5 className="text-[#5E315C] font-base pt-2">
              In collaboration with Norman Chen, Benjamin Ng, Emma Huang
              and Alex Zhu.
            </h5>
            <div className="flex items-start m-auto gap-5 py-4">
              <a
                href="https://github.com/benymng/4FUN"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=Pv8vML8Qfhs"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <AiFillYoutube />
                </div>
              </a>
              <a
                href="https://4fun.benjaminng.ca"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <CgWebsite />
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-xl hover:scale-105 ease-in duration-300 items-start -mt-20">
            <Link href="">
              <img
                src="../assets/SE101.jpg"
                alt="..."
                class="shadow-xl rounded-xl border-none scale-75 scale-y-75"
              />
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#604f79] font-semibold">
              Hack the North 2021: Nyan Cats Only Go Up
            </h3>
            <h5 className="text-[#A68CA4] font-semibold pt-2">
              Boostrap, CharJS, Ethereum, Web3JS, Solidity, Truffle
            </h5>
            <p className="py-2 text-gray-600 text-justify text-lg leading-9">
              NYAN CATS ONLY GO UP is a decentralized, cryptocurrency-based
              stock market game running on the Ethereum blockchain. Users can
              upload memes, as well as buy and sell meme shares for M3M, our own
              crypto token that can be exchanged with Ethereum. Meme prices are
              directly crowdsourced through a voting feature, in which users can
              browse memes and vote for their favourites, ensuring high-quality
              memes grow in price, while stale or unfunny memes get voted out of
              view.
            </p>
            <p className="py-2 text-gray-600 text-justify text-lg leading-9">
              M3M coins can be traded at a 1:1 ratio with Ethereum through our
              web-app interface and users may upload their memes to the
              blockchain for a small fee, in exchange for 100 shares of their
              meme. Every user can access vote on the memes, and the number of
              upvotes/downvotes will dictate the meme's market price. Users can
              freely sell shares of their meme at the market price to the block
              chain in exchange for M3M tokens, and vice versa, providing an
              authentic game theory-ridden, nerve-wracking stock trading
              experience. Although the app is satirical in nature, should it be
              deployed to the Ethereum mainnet, it can easily be played with
              real world money.
            </p>
            <h5 className="text-[#5E315C] font-base pt-2">
              In collaboration with James Su, Lakshy Gupta and Austin Zeng.
            </h5>
            <div className="flex items-start m-auto gap-5 py-4">
              <a
                href="https://github.com/PeteMango/Hack-the-North-2021"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://www.youtube.com/watch?v=nrHQAoDoDp8"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <AiFillYoutube />
                </div>
              </a>
              <a
                href="https://devpost.com/software/nyan-cats-only-go-up"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                  <SiDevpost />
                </div>
              </a>
            </div>
          </div>
          <div className="py-9 space-y-0">
            <div>
              <Link href="">
                <img
                  src="../assets/htn2021-1.jpeg"
                  alt="..."
                  class="shadow-xl rounded-xl border-none scale-90"
                />
              </Link>
            </div>
            <div>
              <Link href="">
                <img
                  src="../assets/htn2021-3.jpeg"
                  alt="..."
                  class="shadow-xl rounded-xl border-none scale-90"
                />
              </Link>
            </div>
            <div>
              <Link href="">
                <img
                  src="../assets/htn2021-2.jpeg"
                  alt="..."
                  class="shadow-xl rounded-xl border-none scale-90"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#116466]'
                  size={30}
                />
              </div>
          </Link>
      </div>
      </div>
    </div>
  );
};

export default Projects;
