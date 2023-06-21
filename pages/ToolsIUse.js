import React, { useRef } from "react";
import Image from "next/image";
import react_2 from "../public/images/react_2.svg";
import tailwind_logo from "../public/images/tailwindcss-icon.svg";
import nodeJs_logo from "../public/images/nodejs-icon.svg";
import Tools from "./Tools";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ToolsIUse = () => {
  const slider = useRef();
  const scroll = (scrollOffset) => {
    slider.current.scrollLeft += scrollOffset;
  };
  const slideLeft = () => {
    const sliderElem = slider.current;
    sliderElem.style.scrollBehavior = "smooth";
    console.log(sliderElem.style.scrollBehavior);
    sliderElem.scrollLeft = sliderElem.scrollLeft - 500;
  };

  const slideRight = () => {
    const sliderElem = slider.current;
    sliderElem.style.scrollBehavior = "smooth";
    sliderElem.scrollLeft = sliderElem.scrollLeft + 500;
  };
  return (
    <div>
      <div className="text-center">
        <h3 className="text-3xl py-2 mx-auto">Tools I Use</h3>
        <p className="text-md py-3 leading-8">
          Since the beginning of my journey as a Self-Taught Software developer,
          I,ve found myself getting more passionate about web-development
        </p>
      </div>
      <div className="flex items-center justify-center">
        <MdChevronLeft
          size={40}
          // onClick={slideLeft}
          onClick={() => scroll(-300)}
          className="opacity-50 cursor-pointer hover:opacity-100 mx-2"
        />

        <div
          ref={slider}
          id="slider"
          className="flex flex-wrap gap-2 md:flex-row scrollbar-hide lg:w-full lg:h-full md:overflow-x-scroll md:scroll-smooth md:whitespace-nowrap lg:p-1 md:flex-nowrap"
        >
          <div className="snap-center text-center shadow-lg rounded-xl my-10 hover:shadow-2xl duration-100 hover:translate-y-1">
            <Image
              src={react_2}
              width={100}
              height={100}
              alt="react_logo"
              className="mx-auto"
            />

            <h3 className="text-lg font-medium pt-8 pb-2">React JS</h3>
            <div className="py-2 mx-2">
              <p>React is a JavaScript library for building user interfaces.</p>
              <p>
                It uses reusable components and a virtual DOM for efficient
                rendering,
              </p>
              <p>making it popular for creating dynamic web applications</p>
            </div>
            <h4 className="py-4 text-teal-600">Learn More</h4>
          </div>

          <div className=" text-center shadow-lg rounded-xl my-10 hover:shadow-2xl duration-100 hover:translate-y-1">
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

            <h4 className="py-4 text-teal-600">Learn More</h4>
          </div>

          <Tools name={nodeJs_logo} />
        </div>

        <MdChevronRight
          size={40}
          // onClick={slideRight}
          onClick={() => scroll(300)}
          className="opacity-50 cursor-pointer hover:opacity-100 mx-2"
        />
      </div>
    </div>
  );
};

export default ToolsIUse;
