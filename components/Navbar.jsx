import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLogo from "../public/assets/petemangoLogo.png";
import { FaLinkedinIn, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { BsFillPersonLinesFill, BsSpotify } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";

const navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShdow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShdow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src={NavLogo}
          alt="/"
          width="120"
          height="120"
          class="pt-3 scale-150"
        />
        <div className="pr-10">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">
                <span className="text-[#604f79] text-lg font-medium">Home</span>
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">
                <span className="text-[#604f79] text-lg font-medium">
                  About
                </span>
              </Link>
            </li>
            {/* <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span className="text-[#604f79] text-lg font-medium">
                  Skills
                </span>
              </li>
            </Link> */}
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <span className="text-[#604f79] text-lg font-medium">
                  Projects
                </span>
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed lef-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fffdfc] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="">
            <div className="flex w-full items-center justify-between">
              <div className="rounded-xl hover:scale-105 ease-in duration-300 items-start -ml-20">
                <Image
                  src={NavLogo}
                  alt="/"
                  width="140"
                  height="140"
                  class="pt-6 -ml-8 scale-150"
                />
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                <span className="text-[#604f79] text-lg font-medium">
                  Aspiring Full-Stack Developer
                </span>
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">
                  <span className="text-[#604f79] text-lg font-medium">
                    Home
                  </span>
                </li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">
                  <span className="text-[#604f79] text-lg font-medium">
                    About
                  </span>
                </li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">
                  <span className="text-[#604f79] text-lg font-medium">
                    Projects
                  </span>
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <h4 className="text-[#604f79] font-semibold">Social Media!</h4>
              <div className="flex items-center justify-between my-1 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/peter-wang-1aa901206/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300 scale-90">
                    <FaLinkedinIn size={15} />
                  </div>
                </a>
                <a
                  href="https://github.com/PeteMango"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300 scale-90">
                    <FaGithub size={15} />
                  </div>
                </a>
                <a
                  href="mailto:whcpeterwang@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300 scale-90">
                    <AiFillMail size={15} />
                  </div>
                </a>
                <a
                  href="https://open.spotify.com/user/whcpeterwang?si=c5015e15e790474a"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300 scale-90">
                    <BsSpotify size={15} />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/pete._.mango/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300 scale-90">
                    <RiInstagramFill size={15} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
