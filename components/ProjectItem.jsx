import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ Name, BackgroundImg, Tech, ProjectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-[75%] w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#116466] to-[#1c9b9e]">
      <Image
        className="rounded-xl group-hover:opacity-10 object-fill"
        src={BackgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {Name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{Tech}</p>
        <Link href={ProjectURL}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;