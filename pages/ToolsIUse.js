import React from "react";
import Image from "next/image";
import design from "../public/design.png";

const ToolsIUse = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl py1 mx-auto">Services I offer</h3>
        <p className="text-md py-2 leading-8">
          Since the beginning of my journey as a freelancer developer, I've done
          remorte work for
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="text-center shadow-lg rounded-xl my-10">
          <Image
            src={design}
            width={100}
            height={100}
            alt="image"
            className="mx-auto"
          />

          <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
          <p className="py-2">
            creating elegant designs suited for your needs.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
        </div>

        <div className="text-center shadow-lg rounded-xl my-10">
          <Image
            src={design}
            width={100}
            height={100}
            alt="image"
            className="mx-auto"
          />

          <h3 className="text-lg font-medium pt-8 pb-2">CSS</h3>
          <p className="py-2">
            creating elegant designs suited for your needs.
          </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
        </div>
      </div>
    </div>
  );
};

export default ToolsIUse;
