import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ME from "../public/assets/me.jpeg";

const AboutMe = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 tracking-widest text-[#2f4454]"> About Me </h2>
          <p className="py-2 text-gray-600 text-justify text-lg leading-8">
            Hi! I'm Peter, a software engineering student at the University of
            Waterloo.
          </p>
          <p className="py-2 text-gray-600 text-justify text-lg leading-8">
            As a software engineering student, I love exploring the intersection
            between the fields of computer science and engineering. When I'm not
            dying from my three weekly quizzes, you can find me divulging myself
            in autonomous driving publications, solving Kaggle problems and
            grinding competitive programming problems.
          </p>
          <p className="py-2 text-gray-600 text-justify text-lg leading-8">
            Academics aside, you can find me bouldering with my friends, in a
            match of WeiQi, listening to my beyond depressing spotify playlists
            or skateboarding through the night! An avid skier during winter and
            tennis player during the two month of summer in Canada, I am a huge
            fan of the outdoors and would often go camping with my family and
            friends. League of Legends is my video-game of choice, feel free to
            add me <span className="text-[#A68CA4]">@PeteMango</span> and we can
            play sometimes!
          </p>
        </div>
        <div className="w-full h-auto m-auto rounded-xl first-line:flex items-center jusitify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="../assets/me.jpeg"
            alt="..."
            class="shadow-xl rounded-xl max-w-full h-auto align-middle border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
