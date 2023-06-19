import React from "react";
import Image from "next/image";
const Tools = ({ name }) => {
  return (
    <div>
      <div className=" text-center shadow-lg rounded-xl my-10 hover:shadow-2xl duration-100 hover:translate-y-1">
        <Image
          src={name}
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

        <h4 className="py-4 text-teal-600">Learn More</h4>
      </div>
    </div>
  );
};

export default Tools;
