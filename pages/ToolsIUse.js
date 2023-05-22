import React from "react";
import Image from "next/image";
import react_2 from "../public/images/react_2.svg";
import tailwind_logo from "../public/images/tailwindcss-icon.svg";
import nodeJs_logo from "../public/images/nodejs-icon.svg";

const ToolsIUse = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl py-1 mx-auto">Tools I Use</h3>
        <p className="text-md py-2 leading-8">
          Since the beginning of my journey as a Self-Taught Software developer,
          I've found myself getting more passionate about web-development
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3 items-center">
        <div className="text-center shadow-lg rounded-xl my-10">
          <Image
            src={react_2}
            width={100}
            height={100}
            alt="react_logo"
            className="mx-auto"
          />

          <h3 className="text-lg font-medium pt-8 pb-2">React</h3>
          <div className="py-2 mx-2">
            <p>React is a JavaScript library for building user interfaces.</p>
            <p>
              It uses reusable components and a virtual DOM for efficient
              rendering,
            </p>
            <p>making it popular for creating dynamic web applications</p>
            <h4 className="py-4 text-teal-600">Learn more</h4>
          </div>
        </div>

        <div className="text-center shadow-lg rounded-xl my-10">
          <Image
            src={tailwind_logo}
            width={100}
            height={100}
            alt="react_logo"
            className="mx-auto"
          />

          <h3 className="text-lg font-medium pt-8 pb-2">Tailwind CSS</h3>
          <div className="py-2 mx-2">
            <p className="py-2 mx-2">
              Tailwind CSS enables me to create stunning, responsive designs
              effortlessly.
            </p>
            <p>By leveraging its extensive collection of utility classes,</p>
            <p>
              I can quickly style and structure websites, saving valuable
              development time.
            </p>
          </div>

          <h4 className="py-4 text-teal-600">Learn more</h4>
        </div>

        <div className="text-center shadow-lg rounded-xl my-10">
          <Image
            src={nodeJs_logo}
            width={100}
            height={100}
            alt="react_logo"
            className="mx-auto"
          />

          <h3 className="text-lg font-medium pt-8 pb-2">Node Js</h3>
          <div className="py-2 mx-2">
            <p>
              Node.js is a JavaScript runtime for building scalable server-side
              applications.
            </p>
            <p>
              It enables the development of client and server sides using a
              unified language,
            </p>
            <p>
              improving productivity. With a vast ecosystem and efficient
              performance,
            </p>
            <p>
              Node.js is widely used for creating real-time applications, APIs,
              and microservices.
            </p>
          </div>

          <h4 className="py-4 text-teal-600">Design tools I use</h4>
        </div>
      </div>
    </div>
  );
};

export default ToolsIUse;
