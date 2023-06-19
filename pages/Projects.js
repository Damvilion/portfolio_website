import React from "react";
import Image from "next/image";
import chatImg from "../public/images/chat-app-img.png";

const Projects = () => {
  return (
    <div>
      <h3 className="text-3xl py-1 text-center">Projects</h3>
      <div className="flex justify-center flex-wrap">
        <div className=" text-center shadow-lg rounded-xl my-10 hover:shadow-2xl duration-100 hover:translate-y-5">
          <div className="rounded-md overflow-hidden my-2 p-3">
            <Image
              src={chatImg}
              width={350}
              // height={100}
              alt="react_logo"
              // objectFit="cover"
              className="mx-auto"
            />
          </div>

          <h3 className="text-lg font-medium pt-8 pb-2">Real Time Chat App</h3>
          <div className=" mx-auto py-2"></div>
          <div className="py-4 text-teal-600 flex justify-evenly">
            <a
              href="https://github.com/Damvilion/real-time-chat"
              target="_blank"
            >
              Source Code
            </a>
            <span>|</span>
            <a
              href="https://real-time-chat-brown.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
