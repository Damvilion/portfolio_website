import React from "react";
import Image from "next/image";
import chatImg from "../public/images/chat-app-img.png";

const Projects = () => {
  return (
    <div>
      <h3 className="text-3xl py-1 text-center">Projects</h3>
      <div className="flex justify-center flex-wrap">
        <div className=" text-center shadow-lg rounded-xl my-10 hover:shadow-2xl duration-100 hover:translate-y-5">
          <div className="rounded-md overflow-hidden my-2">
            <Image
              src={chatImg}
              width={250}
              // height={100}
              alt="react_logo"
              objectFit="cover"
              className="mx-auto"
            />
          </div>

          <h3 className="text-lg font-medium pt-8 pb-2">Real Time Chat App</h3>
          <div className="py-2 mx-2">
            <p></p>
          </div>
          <h4 className="py-4 text-teal-600">
            <a href="http://github.com/damvilion" target="_blank">
              Source Code
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Projects;
