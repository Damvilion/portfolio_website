import React from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import portfolio_pic from "../public/images/portfolio_pic.jpg";

const MainContent = () => {
  return (
    <div>
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">Developed by Noel</h1>
        <ul className="flex item-center">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Noel Ohaeri</h2>
        <h3 className="text-2xl py2">Software Engineer</h3>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
        <a href="https://github.com/Damvilion" target="_blank">
          <AiFillGithub className=" cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/noel-ohaeri-363870215/"
          target="_blank"
        >
          <AiFillLinkedin className=" cursor-pointer" />
        </a>
      </div>
      <div className="mx-auto relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image
          src={portfolio_pic}
          layout="fill"
          objectFit="cover"
          alt="protfolio_picture"
        />
      </div>
    </div>
  );
};

export default MainContent;
